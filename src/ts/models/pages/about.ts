export function about() {
  const aboutPageContainer: HTMLDivElement = document.createElement("div");
  const aboutPageTitle: HTMLParagraphElement = document.createElement("p");
  const aboutPageImgContainer: HTMLDivElement = document.createElement("div");
  const aboutPageImage: HTMLImageElement = document.createElement("img");
  const aboutPageTextFirst: HTMLSpanElement = document.createElement("span");
  const aboutPageTextSecond: HTMLSpanElement = document.createElement("span");
  const aboutPageTextThird: HTMLSpanElement = document.createElement("span");
  const aboutPageResume: HTMLAnchorElement = document.createElement("a");

  aboutPageContainer.setAttribute("id", "about");
  aboutPageContainer.classList.add("about");
  aboutPageTitle.classList.add("about__title");
  aboutPageImgContainer.classList.add("about__imgcontainer");
  aboutPageImgContainer.classList.add("hidden__left");
  aboutPageImage.classList.add("about__img");
  aboutPageTextFirst.classList.add("about__text--first");
  aboutPageTextSecond.classList.add("about__text--second");
  aboutPageTextThird.classList.add("about__text--third");
  aboutPageTextFirst.classList.add("hidden__left");
  aboutPageTextSecond.classList.add("hidden__left");
  aboutPageTextThird.classList.add("hidden__left");
  aboutPageResume.classList.add("about__resume");
  aboutPageResume.classList.add("underline");

  aboutPageTitle.innerHTML = "#about";
  aboutPageImage.src = "https://i.ibb.co/c8nMYmd/adam-1.png";
  aboutPageTextFirst.innerHTML = `Hi, my name is Adam Danielsson and I am currently attending my first year at the Frontend Developer program at <a href="https://medieinstitutet.se/utbildningar/front-end-developer/" target="_blank" class="underline">Medieinstitutet</a> in Stockholm. During this initial time of the education I have established solid knowledge in HTML, CSS and JavaScript including various frameworks.`;
  aboutPageTextSecond.innerHTML = `With a background in design and a bachelor in <a href="https://mau.se/sok-utbildning/program/kgvik/" target="_blank" class="underline">Visual Communication</a> I have a strong foundation in design principles, an eye for detail and bring my creativity and love for aesthetics to every project.`;

  aboutPageResume.href =
    "https://indd.adobe.com/view/d70c9e51-5c67-49ca-8f1f-97d78ec72052";
  aboutPageResume.target = "_blank";
  aboutPageResume.innerHTML = "my resume";

  aboutPageContainer.appendChild(aboutPageTitle);
  aboutPageContainer.appendChild(aboutPageImgContainer);
  aboutPageImgContainer.appendChild(aboutPageImage);
  aboutPageContainer.appendChild(aboutPageTextFirst);
  aboutPageContainer.appendChild(aboutPageTextSecond);

  aboutPageContainer.appendChild(aboutPageResume);
  document.body.appendChild(aboutPageContainer);
}
