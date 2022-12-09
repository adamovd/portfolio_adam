export function navigation() {
  let navigationContainer: HTMLDivElement = document.createElement("div");
  let navigationWork: HTMLAnchorElement = document.createElement("a");
  let navigationAbout: HTMLAnchorElement = document.createElement("a");
  let navigationContact: HTMLAnchorElement = document.createElement("a");
  let navigationGitHub: HTMLAnchorElement = document.createElement("a");
  let navigationLinkedIn: HTMLAnchorElement = document.createElement("a");

  navigationContainer.classList.add("navigation");
  navigationWork.classList.add("navigation__link");
  navigationAbout.classList.add("navigation__link");
  navigationContact.classList.add("navigation__link");
  navigationGitHub.classList.add("navigations__link");
  navigationLinkedIn.classList.add("navigation__link");
  navigationWork.href = "#work";
  navigationAbout.href = "#about";
  navigationContact.href = "#contact";

  navigationWork.innerHTML = "work";
  navigationAbout.innerHTML = "about";
  navigationContact.innerHTML = "contact";

  navigationContainer.appendChild(navigationWork);
  navigationContainer.appendChild(navigationAbout);
  navigationContainer.appendChild(navigationContact);
  document.body.appendChild(navigationContainer);
}
