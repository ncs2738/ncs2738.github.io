import React from "react";
import { useState } from "react";
import { InputForm } from "../../input-form";
import emailjs from "@emailjs/browser";
import { Button, CircularProgress } from "@chakra-ui/react";

export interface InputFormData {
  //
  formValue: string;
  //
  isValid: boolean;
  //
  isClean: boolean;
}

/*TODO - ADD POPUP FOR EMAIL NOTIFICATIONS*/

export const ContactForm = () => {
  const [nameInput, setNameInput] = useState<InputFormData>({
    formValue: "",
    isValid: false,
    isClean: true,
  });
  const [emailInput, setEmailInput] = useState<InputFormData>({
    formValue: "",
    isValid: false,
    isClean: true,
  });
  const [subjectInput, setSubjectInput] = useState<InputFormData>({
    formValue: "",
    isValid: false,
    isClean: true,
  });
  const [messageInput, setMessageInput] = useState<InputFormData>({
    formValue: "",
    isValid: false,
    isClean: true,
  });

  const bText = "Contact Me!";
  const [buttonText, setButtonText] = useState(bText);
  const [isLoading, setIsLoading] = useState(false);

  const clearValues = () => {
    setNameInput({ formValue: "", isValid: false, isClean: true });
    setEmailInput({ formValue: "", isValid: false, isClean: true });
    setSubjectInput({ formValue: "", isValid: false, isClean: true });
    setMessageInput({ formValue: "", isValid: false, isClean: true });
    setIsLoading(false);
  };

  const updateButtonText = (newVal: string) => {
    setButtonText(newVal);
    setTimeout(() => setButtonText(bText), 3000);
  };

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const formData = {
      name: nameInput.formValue,
      email: emailInput.formValue,
      subject: subjectInput.formValue,
      message: messageInput.formValue,
    };

    /* Extra safety steps:
    checking for if isLoading is true will prevent the buttom from being spammable & checking if
    the inputs are valid will let us be sure that we're stopping any invalid form emails being sent */

    if (
      !isLoading &&
      formData.name !== "" &&
      formData.email !== "" &&
      formData.subject !== "" &&
      formData.message !== ""
    ) {
      setIsLoading(true);
      emailjs
        .send(
          "service_7v4wwxz",
          "template_wdeo3cq",
          formData,
          "gPlpIcf9c1a3-vvVz",
        )
        .then(
          (result: { text: any }) => {
            console.log(result.text);
            clearValues();
            updateButtonText("Sent!");
          },
          (error: { text: any }) => {
            console.log(error.text);
            setIsLoading(false);
            updateButtonText("Error; Try Again!");
          },
        );
    }
  };

  return (
    <form onSubmit={sendEmail}>
      <InputForm
        formValue={nameInput}
        updateValue={setNameInput}
        formLabel="Name"
        formName="name"
      />
      <InputForm
        formValue={emailInput}
        updateValue={setEmailInput}
        formLabel="Email"
        inputType="email"
        formName="email"
      />
      <InputForm
        formValue={subjectInput}
        updateValue={setSubjectInput}
        formLabel="Subject"
        formName="subject"
      />
      <InputForm
        formValue={messageInput}
        updateValue={setMessageInput}
        formLabel="Message"
        formName="message"
      />

      <Button variant="outline" type="submit" width="full" mt={4}>
        {isLoading ? (
          <CircularProgress isIndeterminate size="24px" color="teal" />
        ) : (
          `${buttonText}`
        )}
      </Button>
    </form>
  );
};
