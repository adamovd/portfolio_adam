export function contact() {
  const contactPageContainer: HTMLDivElement = document.createElement("div");
  const contactPageTitle: HTMLParagraphElement = document.createElement("p");

  const contactForm: HTMLFormElement = document.createElement("form");
  const contactFormFirstNameContainer: HTMLDivElement =
    document.createElement("div");
  const contactFormFirstNameLabel: HTMLLabelElement =
    document.createElement("label");
  const contactFormFirstNameInput: HTMLInputElement =
    document.createElement("input");
  const contactFormLastNameContainer: HTMLDivElement =
    document.createElement("div");
  const contactFormLastNameLabel: HTMLLabelElement =
    document.createElement("label");
  const contactFormLastNameInput: HTMLInputElement =
    document.createElement("input");
  const contactFormMailContainer: HTMLDivElement =
    document.createElement("div");
  const contactFormMailLabel: HTMLLabelElement =
    document.createElement("label");
  const contactFormMailInput: HTMLInputElement =
    document.createElement("input");
  const contactFormPhoneContainer: HTMLDivElement =
    document.createElement("div");
  const contactFormPhoneLabel: HTMLLabelElement =
    document.createElement("label");
  const contactFormPhoneInput: HTMLInputElement =
    document.createElement("input");
  const contactFormMessageContainer: HTMLDivElement =
    document.createElement("div");
  const contactFormMessageLabel: HTMLLabelElement =
    document.createElement("label");
  const contactFormMessageInput: HTMLTextAreaElement =
    document.createElement("textarea");
  const contactFormSubmitButton: HTMLButtonElement =
    document.createElement("button");

  contactPageContainer.setAttribute("id", "contact");
  contactPageContainer.classList.add("contact");
  contactPageTitle.classList.add("contact__title");
  contactForm.classList.add("form");
  contactFormFirstNameContainer.classList.add("form__container");
  contactFormLastNameContainer.classList.add("form__container");
  contactFormMailContainer.classList.add("form__container");
  contactFormPhoneContainer.classList.add("form__container");
  contactFormMessageContainer.classList.add("form__container");
  contactFormFirstNameLabel.classList.add("form__label");
  contactFormLastNameLabel.classList.add("form__label");
  contactFormMailLabel.classList.add("form__label");
  contactFormPhoneLabel.classList.add("form__label");
  contactFormMessageLabel.classList.add("form__label");
  contactFormFirstNameInput.classList.add("form__input");
  contactFormLastNameInput.classList.add("form__input");
  contactFormMailInput.classList.add("form__input");
  contactFormPhoneInput.classList.add("form__input");
  contactFormMessageInput.classList.add("form__input--message");
  contactFormSubmitButton.classList.add("form__button");

  contactFormFirstNameLabel.setAttribute("for", "firstName");
  contactFormLastNameLabel.setAttribute("for", "lastName");
  contactFormMailLabel.setAttribute("for", "mail");
  contactFormPhoneLabel.setAttribute("for", "phone");
  contactFormMessageLabel.setAttribute("for", "message");
  contactFormFirstNameInput.setAttribute("id", "firstName");
  contactFormLastNameInput.setAttribute("id", "lastName");
  contactFormMailInput.setAttribute("id", "mail");
  contactFormPhoneInput.setAttribute("id", "phonee");
  contactFormMessageInput.setAttribute("id", "message");
  contactFormFirstNameInput.type = "text";
  contactFormLastNameInput.type = "text";
  contactFormMailInput.type = "email";
  contactFormPhoneInput.type = "phone";
  contactFormSubmitButton.type = "submit";
  contactFormFirstNameInput.required = true;
  contactFormLastNameInput.required = true;
  contactFormMailInput.required = true;
  contactFormMessageInput.required = true;

  contactPageTitle.innerHTML = "#contact";
  contactFormFirstNameLabel.innerHTML = "First Name";
  contactFormLastNameLabel.innerHTML = "Last Name";
  contactFormMailLabel.innerHTML = "Mail";
  contactFormPhoneLabel.innerHTML = "Phone";
  contactFormMessageLabel.innerHTML = "Your Message";
  contactFormSubmitButton.innerHTML = "Submit";

  contactForm.appendChild(contactFormFirstNameContainer);
  contactForm.appendChild(contactFormLastNameContainer);
  contactForm.appendChild(contactFormMailContainer);
  contactForm.appendChild(contactFormPhoneContainer);
  contactForm.appendChild(contactFormMessageContainer);
  contactForm.appendChild(contactFormSubmitButton);
  contactFormFirstNameContainer.appendChild(contactFormFirstNameLabel);
  contactFormFirstNameContainer.appendChild(contactFormFirstNameInput);
  contactFormLastNameContainer.appendChild(contactFormLastNameLabel);
  contactFormLastNameContainer.appendChild(contactFormLastNameInput);
  contactFormMailContainer.appendChild(contactFormMailLabel);
  contactFormMailContainer.appendChild(contactFormMailInput);
  contactFormPhoneContainer.appendChild(contactFormPhoneLabel);
  contactFormPhoneContainer.appendChild(contactFormPhoneInput);
  contactFormMessageContainer.appendChild(contactFormMessageLabel);
  contactFormMessageContainer.appendChild(contactFormMessageInput);
  contactPageContainer.appendChild(contactPageTitle);
  contactPageContainer.appendChild(contactForm);
  document.body.appendChild(contactPageContainer);
}
