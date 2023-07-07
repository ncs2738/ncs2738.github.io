import { FormControl, Input } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import { useState } from "react";
import { FormData } from "../pages/contact-form";

interface PublicProps {
  //
  formValue: FormData;
  //
  updateValue: (newVal: FormData) => void;
  //
  formLabel: string;
  //
  inputType?: string;
}

export const InputForm: FunctionComponent<PublicProps> = ({
  formValue,
  updateValue,
  formLabel,
  inputType,
}) => {
  const isValid = formValue.formValue !== "";
  const [isClean, setIsClean] = useState(true);
  const isRequired = !isClean && !isValid;

  const handleOnClick = () => {
    if (isClean) setIsClean(false);
  };
  const handleInputChange = (e: { target: { value: any } }) =>
    updateValue({ formValue: e.target.value, isValid: isValid });

  return (
    <FormControl isInvalid={isRequired} isRequired={isRequired}>
      {inputType ? (
        <Input
          type={inputType}
          value={formValue.formValue}
          onChange={handleInputChange}
          placeholder={formLabel}
          onClick={handleOnClick}
        />
      ) : (
        <Input
          value={formValue.formValue}
          onChange={handleInputChange}
          placeholder={formLabel}
          onClick={handleOnClick}
        />
      )}
    </FormControl>
  );
};
