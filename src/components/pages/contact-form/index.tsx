import React from "react";
import { useState } from "react";
import { InputForm } from "../../input-form";

export interface FormData {
  //
  formValue: string;
  //
  isValid: boolean;
}

export const ContactForm = () => {
  const [nameInput, setNameInput] = useState<FormData>({
    formValue: "",
    isValid: true,
  });
  const [emailInput, setEmailInput] = useState<FormData>({
    formValue: "",
    isValid: true,
  });
  const [subjectInput, setSubjectInput] = useState<FormData>({
    formValue: "",
    isValid: true,
  });
  const [messageInput, setMessageInput] = useState<FormData>({
    formValue: "",
    isValid: true,
  });

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
    </>
  );
};
