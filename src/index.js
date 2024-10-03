function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "bla bla bla bla bla",
    autoStart: true,
    cursor: "",
  });
}

let formElement = document.querySelector("#poem-generator-form");
formElement.addEventListener("submit", generatePoem);
