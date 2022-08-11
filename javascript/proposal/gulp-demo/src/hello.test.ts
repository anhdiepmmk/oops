import * as helloService from './hello';

describe('hello', () => {
  it('should say hello', () => {
    expect(helloService.sayHello('world')).toEqual('Hello from world');
  })

  it('should throw when provide an invalid name', () => {
    expect(() => helloService.sayHello()).toThrowError(new Error('invalid name'));
  })
});