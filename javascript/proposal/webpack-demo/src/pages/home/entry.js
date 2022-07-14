import "../../styles/main.scss";
import dog from "../../assets/shiba.jpeg";
import _ from "lodash";
import { sayHello } from "@demo/services/hello";
import { generateJoke } from "@demo/services/joke";

sayHello();

const dogImg = document.getElementById("dogImg");
dogImg.src = dog;

const btnGetNewJoke = document.getElementById("btnGetNewJoke");
btnGetNewJoke.addEventListener("click", () => {
  generateJoke();
});

generateJoke();
