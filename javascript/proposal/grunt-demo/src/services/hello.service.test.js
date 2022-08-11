const helloService = require('./hello.service');

describe('hello.service', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should say hello', () => {
    jest.spyOn(helloService, 'sayHello');

    helloService.sayHello();

    expect(helloService.sayHello).toHaveBeenCalled();
  });
});