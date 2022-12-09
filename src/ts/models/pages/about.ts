export function about() {
  const aboutPageContainer: HTMLDivElement = document.createElement("div");
  aboutPageContainer.setAttribute("id", "about");
  aboutPageContainer.classList.add("about");
  document.body.appendChild(aboutPageContainer);
}
