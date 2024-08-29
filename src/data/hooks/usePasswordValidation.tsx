import { useState } from "react";

function usePasswordValidation(initialValue = "") {
  const [password, setPassword] = useState(initialValue);
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const validatePassword = (value: string) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumber = /\d/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

    if (value.length < minLength) {
      setIsValid(false);
      setErrorMessage(`A senha deve ser pelo menos ${minLength} caracteres.`);
    } else if (!hasUpperCase) {
      setIsValid(false);
      setErrorMessage("A senha deve conter pelo menos uma letra maiúscula.");
    } else if (!hasLowerCase) {
      setIsValid(false);
      setErrorMessage("A senha deve conter pelo menos uma letra minúscula.");
    } else if (!hasNumber) {
      setIsValid(false);
      setErrorMessage("A senha deve conter pelo menos um número.");
    } else if (!hasSpecialChar) {
      setIsValid(false);
      setErrorMessage("A senha deve conter pelo menos um caractere especial.");
    } else {
      setIsValid(true);
      setErrorMessage("");
    }
  };

  const handlePasswordChange = (e: any) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
  };

  return {
    password,
    isValid,
    errorMessage,
    handlePasswordChange,
  };
}

export default usePasswordValidation;
