import axios, { AxiosResponse } from "axios";

export async function getRepos() {
  let response = await axios.get("https://api.github.com/users/adamovd/repos");

  return response;
}
