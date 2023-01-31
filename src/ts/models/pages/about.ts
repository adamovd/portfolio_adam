export function about() {
  const aboutPageContainer: HTMLDivElement = document.createElement("div");
  let aboutPageTitle: HTMLParagraphElement = document.createElement("p");
  let aboutPageImage: HTMLImageElement = document.createElement("img");
  let aboutPageText: HTMLSpanElement = document.createElement("span");
  let aboutPageResume: HTMLAnchorElement = document.createElement("a");

  aboutPageContainer.setAttribute("id", "about");
  aboutPageContainer.classList.add("about");
  aboutPageTitle.classList.add("about__title");
  aboutPageImage.classList.add("about__img");
  aboutPageText.classList.add("about__text");
  aboutPageResume.classList.add("about_resume");

  aboutPageTitle.innerHTML = "#about";
  aboutPageImage.src = "";
  aboutPageText.innerHTML = `I'm a designer and developer!`;
  aboutPageResume.href = "https://azure-cherise-5.tiiny.site/";
  aboutPageResume.target = "_blank";
  aboutPageResume.innerHTML = "my resume";

  aboutPageContainer.appendChild(aboutPageTitle);
  aboutPageContainer.appendChild(aboutPageImage);
  aboutPageContainer.appendChild(aboutPageText);
  aboutPageContainer.appendChild(aboutPageResume);
  document.body.appendChild(aboutPageContainer);
}
