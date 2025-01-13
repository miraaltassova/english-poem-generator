function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "I did but prompt the age to quit their clogs",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
