const _ = require("lodash");
const { sayHello } = require("./services/hello");

sayHello();

document.body.innerText = "hi there";
