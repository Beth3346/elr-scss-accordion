"use-strict";
(() => {
  const accordions = Array.from(document.getElementsByClassName("accordion"));
  accordions.forEach(accordion => {
    const buttons = Array.from(accordion.getElementsByTagName("button"));

    buttons.forEach(button =>
      button.addEventListener("click", e => {
        const contentId = button.attributes["data-contentid"].nodeValue;
        const content = document.getElementById(contentId);
        // const label = button.parentNode;

        if (content) {
          // console.log('classes', content.classList);
          content.classList.toggle("active");
        }

        // if (label) {
        button.classList.toggle("active");
        // }
      })
    );
  });
})();
