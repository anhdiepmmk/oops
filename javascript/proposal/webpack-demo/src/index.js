import "./styles/main.scss";
import dog from "./assets/shiba.jpeg";
import _ from "lodash";
import { sayHello } from "./services/hello";
import { generateJoke } from "./services/joke";

sayHello();

const dogImg = document.getElementById("dogImg");
dogImg.src = dog;

generateJoke();
