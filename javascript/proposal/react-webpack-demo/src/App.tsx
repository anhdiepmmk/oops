export const App = ({ message }: { message?: string }) => {
  return (
    <h1 data-testid="heading-hello">{message ? message : "Hello world"}</h1>
  );
};
