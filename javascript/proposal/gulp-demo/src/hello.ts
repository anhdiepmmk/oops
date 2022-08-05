export function sayHello(name?: string) {
  if (!name) {
    throw new Error("invalid name");
  }
  return `Hello from ${name}`;
}
