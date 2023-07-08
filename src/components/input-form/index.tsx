import { FormControl, Input } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import { InputFormData } from "../pages/contact-form";

interface PublicProps {
  //
  formValue: InputFormData;
  //
  updateValue: (newVal: InputFormData) => void;
  //
  formLabel: string;
  //
  formName: string;
  //
  inputType?: string;
}

export const InputForm: FunctionComponent<PublicProps> = ({
  formValue,
  updateValue,
  formLabel,
  formName,
  inputType,
}) => {
  const isValid = formValue.formValue !== "";
  const isRequired = !formValue.isClean && !isValid;

  const handleOnClick = () => {
    if (formValue.isClean)
      updateValue({
        formValue: formValue.formValue,
        isValid: isValid,
        isClean: false,
      });
  };
  const handleInputChange = (e: { target: { value: any } }) =>
    updateValue({
      formValue: e.target.value,
      isValid: isValid,
      isClean: formValue.isClean,
    });

  return (
    <FormControl isInvalid={isRequired} isRequired={isRequired}>
      {inputType ? (
        <Input
          type={inputType}
          value={formValue.formValue}
          onChange={handleInputChange}
          placeholder={formLabel}
          onClick={handleOnClick}
          name={formName}
        />
      ) : (
        <Input
          value={formValue.formValue}
          onChange={handleInputChange}
          placeholder={formLabel}
          onClick={handleOnClick}
          name={formName}
        />
      )}
    </FormControl>
  );
};
