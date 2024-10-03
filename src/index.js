function generatePoem(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#search-input");
  let apiKey = "41f9b9t0ec755bae06caf1o002842139";
  let context =
    "you are a creative and romantic poem writer. Please write poems with 4 lines. Poems must be in the portuguese language, and sign 'SheCodes AI' in bold at the end of the lines. ";
  let prompt = `Please write a poem using the word ${searchInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(showPoem);
}
function showPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let formElement = document.querySelector("#poem-generator-form");
formElement.addEventListener("submit", generatePoem);
