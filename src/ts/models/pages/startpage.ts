export function startpage() {
  const startPageContainer: HTMLDivElement = document.createElement("div");
  const startPageHeader: HTMLHeadingElement = document.createElement("p");
  const startPageText: HTMLSpanElement = document.createElement("span");

  startPageContainer.setAttribute("id", "startpage");
  startPageContainer.classList.add("startpage");
  startPageHeader.classList.add("startpage__header");
  startPageText.classList.add("startpage__text");
  startPageHeader.classList.add("hidden__under");
  startPageText.classList.add("hidden__under");

  startPageHeader.innerHTML = `Hello, </br> my name is Adam.`;
  startPageText.innerHTML = `I´m a Frontend Developer student, based in Stockholm, with an interest in finding
  creative solutions to develop visually appealing websites.`;

  document.body.appendChild(startPageContainer);
  startPageContainer.appendChild(startPageHeader);
  startPageContainer.appendChild(startPageText);
}

const bday: Date = new Date(1993, 0, 20, 14, 30);

console.log(bday);

const end: Date = new Date(2023, 0, 20, 8.3);

console.log(end.toString());

const elapsed: number = end.getTime() - bday.getTime();

console.log(elapsed);
