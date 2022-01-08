
var buttons = document.querySelectorAll(".drum");
buttons.forEach(button =>
    button.addEventListener("click",
    function () {
      alert("I got clicked");
    }
  )
);

// document.querySelector("button").addEventListener("click", handleClick);
