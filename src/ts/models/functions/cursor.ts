export function cursor() {
  const innerCursor: HTMLDivElement = document.createElement("div");
  const outerCursor: HTMLDivElement = document.createElement("div");
  innerCursor.classList.add("inner-cursor");
  outerCursor.classList.add("outer-cursor");
  document.body.append(innerCursor);
  document.body.append(outerCursor);
  let timeout;

  document.addEventListener("mousemove", (event) => {
    let x: number = event.clientX;
    let y: number = event.clientY;

    innerCursor.style.top = `${y}px`;
    innerCursor.style.left = `${x}px`;
    innerCursor.style.display = "block";
    outerCursor.style.top = `${y}px`;
    outerCursor.style.left = `${x}px`;
    outerCursor.style.display = "block";
  });

  const mouseStopped = () => {
    innerCursor.style.display = "none";
    outerCursor.style.display = "none";
  };

  clearTimeout(timeout);
  timeout = setTimeout(mouseStopped, 2000);

  let links: HTMLAnchorElement[] = Array.from(document.querySelectorAll("a"));

  links.forEach((link) => {
    link.addEventListener("mouseover", () => {
      innerCursor.classList.add("grow");
    });
    link.addEventListener("mouseleave", () => {
      innerCursor.classList.remove("grow");
    });
  });
}
