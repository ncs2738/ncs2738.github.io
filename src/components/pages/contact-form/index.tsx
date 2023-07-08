import React from "react";
import { useState } from "react";
import { InputForm } from "../../input-form";
import emailjs from "@emailjs/browser";
import { Button } from "@chakra-ui/react";

export interface InputFormData {
  //
  formValue: string;
  //
  isValid: boolean;
}

export const ContactForm = () => {
  const [nameInput, setNameInput] = useState<InputFormData>({
    formValue: "",
    isValid: true,
  });
  const [emailInput, setEmailInput] = useState<InputFormData>({
    formValue: "",
    isValid: true,
  });
  const [subjectInput, setSubjectInput] = useState<InputFormData>({
    formValue: "",
    isValid: true,
  });
  const [messageInput, setMessageInput] = useState<InputFormData>({
    formValue: "",
    isValid: true,
  });

  const sendEmail = () => {
    const formData = {
      name: nameInput.formValue,
      email: emailInput.formValue,
      subject: subjectInput.formValue,
      message: messageInput.formValue,
    };

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
        },
        (error: { text: any }) => {
          console.log(error.text);
        },
      );
  };

  return (
    <>
      <InputForm
        formValue={nameInput}
        updateValue={setNameInput}
        formLabel={"Name"}
      />
      <InputForm
        formValue={emailInput}
        updateValue={setEmailInput}
        formLabel={"Email"}
        inputType="email"
      />
      <InputForm
        formValue={subjectInput}
        updateValue={setSubjectInput}
        formLabel={"Subject"}
      />
      <InputForm
        formValue={messageInput}
        updateValue={setMessageInput}
        formLabel={"Message"}
      />

      <Button onClick={sendEmail} />
    </>
  );
};
