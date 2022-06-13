const sayHello = (message) => {
  if (message) {
    console.log(message);
  } else {
    console.log("hello");
  }
};

module.exports = {
  sayHello,
};
