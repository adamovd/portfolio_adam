export function about() {
  const aboutPageContainer: HTMLDivElement = document.createElement("div");
  const aboutPageTitle: HTMLParagraphElement = document.createElement("p");
  const aboutPageImage: HTMLImageElement = document.createElement("img");
  const aboutPageTextFirst: HTMLSpanElement = document.createElement("span");
  const aboutPageTextSecond: HTMLSpanElement = document.createElement("span");
  const aboutPageTextThird: HTMLSpanElement = document.createElement("span");
  const aboutPageResume: HTMLAnchorElement = document.createElement("a");

  aboutPageContainer.setAttribute("id", "about");
  aboutPageContainer.classList.add("about");
  aboutPageTitle.classList.add("about__title");
  aboutPageImage.classList.add("about__img");
  aboutPageTextFirst.classList.add("about__text--first");
  aboutPageTextSecond.classList.add("about__text--second");
  aboutPageTextThird.classList.add("about__text--third");
  aboutPageTextFirst.classList.add("hidden__under");
  aboutPageTextSecond.classList.add("hidden__under");
  aboutPageTextThird.classList.add("hidden__under");
  aboutPageResume.classList.add("about__resume");
  aboutPageResume.classList.add("underline");

  aboutPageTitle.innerHTML = "#about";
  aboutPageImage.src =
    "https://rushfiles.one/5fcb3385-c937-491c-adc3-a65ba8167f96";
  aboutPageTextFirst.innerHTML = `Hi, my name is Adam Danielsson and I am currently attending my first year at the Frontend Developer program at <a href="https://medieinstitutet.se/utbildningar/front-end-developer/" target="_blank" class="underline">Medieinstitutet</a> in Stockholm. During this initial time of the education I have established solid knowledge in HTML, CSS and JavaScript including various frameworks.`;
  aboutPageTextSecond.innerHTML = `With a background in design and a bachelor in <a href="https://mau.se/sok-utbildning/program/kgvik/" target="_blank" class="underline">Visual Communication</a> I have a strong foundation in design principles and an eye for detail, I bring my creativity and love for aesthetics to every project.`;
  aboutPageTextThird.innerHTML = `I am a fast learner who is always eager to expand my skills and knowledge in the field. With my passion for design, technical ability, and drive to succeed, I am confident in my capability to create stunning websites.`;
  aboutPageResume.href = "https://pdfhost.io/v/YcnB.4GMt_Adam_Danielsson_CV";
  aboutPageResume.target = "_blank";
  aboutPageResume.innerHTML = "my resume";

  aboutPageContainer.appendChild(aboutPageTitle);
  aboutPageContainer.appendChild(aboutPageImage);
  aboutPageContainer.appendChild(aboutPageTextFirst);
  aboutPageContainer.appendChild(aboutPageTextSecond);
  aboutPageContainer.appendChild(aboutPageTextThird);
  aboutPageContainer.appendChild(aboutPageResume);
  document.body.appendChild(aboutPageContainer);
}
