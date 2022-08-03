const helloService = require("./hello");

describe("hello", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should say hello", () => {
    jest.spyOn(console, "log");
    helloService.sayHello();
    expect(console.log).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith("hello!");
  });
});
