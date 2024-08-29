import { useState } from "react";

function useEmailValidation(initialValue = "") {
  const [email, setEmail] = useState(initialValue);
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const allowedDomains = ["gmail.com", "hotmail.com"];
    const domain = value.split("@")[1];

    if (!value) {
      setIsValid(false);
      setErrorMessage("O e-mail é obrigatório.");
    } else if (!emailRegex.test(value)) {
      setIsValid(false);
      setErrorMessage("Formato de e-mail inválido.");
    } else if (!allowedDomains.includes(domain)) {
      setIsValid(false);
      setErrorMessage("O e-mail deve ser de gmail.com ou hotmail.com.");
    } else {
      setIsValid(true);
      setErrorMessage("");
    }
  };

  const handleEmailChange = (e: any) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };

  return {
    email,
    isValid,
    errorMessage,
    handleEmailChange,
  };
}

export default useEmailValidation;
