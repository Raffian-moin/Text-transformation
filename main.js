let button = document.querySelector(".btn");

button.addEventListener("click", function (event) {
    let textArea = document.querySelector("#text_area");
    let result = "";
    if (event.target.value === "snake_case") {
       result = snakeCase(textArea.value);
    }

    textArea.value = result;
})

function snakeCase(text) {
    let string = ""
    for (const ch of text) {
      if (
        ch === " " ||
        ch === "\t" ||
        ch === "\n" ||
        ch === "\r" ||
        ch === "\f" ||
        ch === "\v"
      ) {
        string += "_";
      } else {
        string += ch.toLowerCase();
      }
    }

    return string;
}