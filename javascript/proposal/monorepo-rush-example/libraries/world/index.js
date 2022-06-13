const sayWorld = (message) => {
  if (message) {
    console.log(message);
  } else {
    console.log("world");
  }
};

module.exports = {
  sayWorld,
};
