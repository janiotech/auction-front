import { useState } from "react";

function useRequiredField(initialValue = "") {
  const [value, setValue] = useState(initialValue);
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const validateField = (value: string) => {
    if (!value) {
      setIsValid(false);
      setErrorMessage("Este campo é obrigatório.");
    } else {
      setIsValid(true);
      setErrorMessage("");
    }
  };

  const handleFieldChange = (e: any) => {
    const value = e.target.value;
    setValue(value);
    validateField(value);
  };

  return {
    value,
    isValid,
    errorMessage,
    handleFieldChange,
  };
}

export default useRequiredField;
