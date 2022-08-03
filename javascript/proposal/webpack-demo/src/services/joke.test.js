import axios from "axios";
import { generateJoke } from "./joke";

describe("generateJoke", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should say generate joke properly", () => {
    jest.spyOn(axios, "get").mockResolvedValue({
      response: {
        data: {
          joke: "a joke",
        },
      },
    });

    generateJoke();

    expect(axios.get).toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalledWith("https://icanhazdadjoke.com", {
      headers: { Accept: "application/json" },
    });
  });
});
