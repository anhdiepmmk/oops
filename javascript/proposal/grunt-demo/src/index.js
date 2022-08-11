const helloService = require('./services/hello.service');
const worldService = require('./services/world.service');

console.log(helloService.sayHello());
console.log(worldService.sayWorld());