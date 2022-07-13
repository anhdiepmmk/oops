import axios from "axios";

async function generateJoke() {
  const response = await axios.get("https://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json",
    },
  });

  const joke = _.get(response.data, "joke");
  document.getElementById("joke").innerText = joke;
}

export { generateJoke };
