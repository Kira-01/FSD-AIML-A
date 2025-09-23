const url = "https://api.github.com/users/Kira-01";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log("Data =", data); // log properly
    console.log("User login:", data.login); // example field
    console.log("Public repos:", data.public_repos);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  })