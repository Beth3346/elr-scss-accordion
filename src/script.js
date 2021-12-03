"use-strict";
(() => {
  const accordions = Array.from(document.getElementsByClassName("accordion"));
  accordions.forEach(accordion => {
    const buttons = Array.from(accordion.getElementsByTagName("button"));

    buttons.forEach(button =>
      button.addEventListener("click", () => {
        const contentId = button.attributes["data-contentid"].nodeValue;
        const content = document.getElementById(contentId);
        const expanded = button.attributes["aria-expanded"].nodeValue;

        if (content) {
          content.classList.toggle("active");
        }

        button.classList.toggle("active");

        if (expanded === "false") {
          button.attributes["aria-expanded"].nodeValue = "true";
        } else {
          button.attributes["aria-expanded"].nodeValue = "false";
        }
      })
    );
  });
})();
