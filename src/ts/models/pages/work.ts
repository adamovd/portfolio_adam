import { projects } from "../projectList";

export function work() {
  const workPageContainer: HTMLDivElement = document.createElement("div");
  const workPageTitle: HTMLParagraphElement = document.createElement("p");
  workPageContainer.setAttribute("id", "work");
  workPageContainer.classList.add("work");
  workPageTitle.classList.add("work__title");
  workPageTitle.innerHTML = "work";
  workPageContainer.appendChild(workPageTitle);
  document.body.appendChild(workPageContainer);

  projects.forEach((project) => {
    let projectContainer: HTMLDivElement = document.createElement("div");
    let projectTitle: HTMLParagraphElement = document.createElement("p");
    let projectType: HTMLParagraphElement = document.createElement("p");
    let projectImageDiv: HTMLDivElement = document.createElement("div");
    let projectMobileImage: HTMLImageElement = document.createElement("img");
    let projectDesktopImage: HTMLImageElement = document.createElement("img");
    let projectDescription: HTMLSpanElement = document.createElement("span");
    let projectLink: HTMLParagraphElement = document.createElement("p");
    let projectRepo: HTMLAnchorElement = document.createElement("a");

    projectContainer.classList.add("project");
    projectTitle.classList.add("project__title");
    projectTitle.classList.add("hidden__under");
    projectType.classList.add("project__type");
    projectType.classList.add("hidden__under");
    projectImageDiv.classList.add("project__imgcontainer");
    projectMobileImage.classList.add("project__img--mobile");
    projectMobileImage.classList.add("hidden__side");
    projectDesktopImage.classList.add("project__img--desktop");
    projectDesktopImage.classList.add("hidden__under");
    projectDescription.classList.add("project__describe");
    projectLink.classList.add("project__link");
    projectRepo.classList.add("project__repo");

    projectTitle.innerHTML = project.title;
    projectType.innerHTML = project.type;
    projectMobileImage.src = project.mobileimg;
    projectMobileImage.alt = project.title + " mobile";
    projectDesktopImage.src = project.desktopimg;
    projectDesktopImage.alt = project.title + " desktop";
    projectDescription.innerHTML = project.description;
    projectLink.innerHTML = project.link;
    projectRepo.innerHTML = `<i class="fa-brands fa-github"></i>`;
    projectRepo.href = project.repo;
    projectRepo.target = "_blank";

    projectContainer.appendChild(projectTitle);
    projectContainer.appendChild(projectType);
    projectImageDiv.appendChild(projectDesktopImage);
    projectImageDiv.appendChild(projectMobileImage);
    projectContainer.appendChild(projectImageDiv);
    projectContainer.appendChild(projectDescription);
    projectContainer.appendChild(projectLink);
    projectContainer.appendChild(projectRepo);
    workPageContainer.appendChild(projectContainer);
  });

  document.body.appendChild(workPageContainer);
}
