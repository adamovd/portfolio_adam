import { about } from "./about";
import { contact } from "./contact";
import { startpage } from "./startpage";
import { work } from "./work";

export function navigation() {
  const navigationContainer: HTMLDivElement = document.createElement("div");
  const navigationLinksContainer: HTMLDivElement =
    document.createElement("div");
  const navigationLogoContainer: HTMLDivElement = document.createElement("div");
  const navigationSocialContainer: HTMLDivElement =
    document.createElement("div");
  const navigationWork: HTMLAnchorElement = document.createElement("a");
  const navigationAbout: HTMLAnchorElement = document.createElement("a");
  const navigationContact: HTMLAnchorElement = document.createElement("a");
  const navigationGitHub: HTMLAnchorElement = document.createElement("a");
  const navigationLinkedIn: HTMLAnchorElement = document.createElement("a");
  const navigationLogoLink: HTMLAnchorElement = document.createElement("a");
  const navigationLogo: HTMLImageElement = document.createElement("img");

  navigationContainer.classList.add("navigation");
  navigationLinksContainer.classList.add("navigation__linkcontainer");
  navigationLogoContainer.classList.add("navigation__logocontainer");
  navigationSocialContainer.classList.add("navigation__socialcontainer");
  navigationWork.classList.add("navigation__link");
  navigationAbout.classList.add("navigation__link");
  navigationContact.classList.add("navigation__link");
  navigationWork.classList.add("navigation__link");
  navigationAbout.classList.add("navigation__link");
  navigationContact.classList.add("navigation__link");
  navigationGitHub.classList.add("navigation__social");
  navigationLinkedIn.classList.add("navigation__social");
  navigationLogo.classList.add("navigation__logo");

  navigationWork.innerHTML = "work";
  navigationAbout.innerHTML = "about";
  navigationContact.innerHTML = "contact";
  navigationLogo.src = "https://i.ibb.co/4gtYX6t/adam-logo.png";
  navigationGitHub.innerHTML = `<i class="fa-brands fa-github"></i>`;
  navigationLinkedIn.innerHTML = `<i class="fa-brands fa-linkedin"></i>`;

  navigationWork.href = "#work";
  navigationAbout.href = "#about";
  navigationContact.href = "#contact";
  navigationLogoLink.href = "#startpage";

  navigationContainer.appendChild(navigationLinksContainer);
  navigationContainer.appendChild(navigationLogoContainer);
  navigationContainer.appendChild(navigationSocialContainer);
  navigationLinksContainer.appendChild(navigationWork);
  navigationLinksContainer.appendChild(navigationAbout);
  navigationLinksContainer.appendChild(navigationContact);
  navigationLogoContainer.appendChild(navigationLogoLink);
  navigationLogoLink.appendChild(navigationLogo);
  navigationSocialContainer.appendChild(navigationGitHub);
  navigationSocialContainer.appendChild(navigationLinkedIn);
  document.body.appendChild(navigationContainer);
}
