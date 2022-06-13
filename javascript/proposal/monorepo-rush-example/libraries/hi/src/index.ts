export const sayHi = (message?: string): void => {
  if (message) {
    console.log(message);
  } else {
    console.log("hi");
  }
};
