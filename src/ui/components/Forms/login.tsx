"use client";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";
//hooks
import useEmailValidation from "@/data/hooks/useEmailValidation";
import useRequiredField from "@/data/hooks/useRequiredField";

function InputEmail() {
  const { email, isValid, errorMessage, handleEmailChange } = useEmailValidation();
  return (
    <>
      <FormControl sx={{ mt: "16px", width: "100%" }} variant="outlined">
        <InputLabel htmlFor="input-e-mail" error={isValid ? false : true}>
          E-mail
        </InputLabel>
        <OutlinedInput
          id="input-e-mail"
          type="text"
          endAdornment={<InputAdornment position="end"></InputAdornment>}
          label="E-mail"
          onChange={handleEmailChange}
          error={isValid ? false : true}
        />
      </FormControl>
      <p className="text-[#ff3b3b] font-sans text-sm text-left py-2">{errorMessage}</p>
    </>
  );
}

function InputPassword() {
  const [showPassword, setShowPassword] = React.useState(false);
  const { value, isValid, errorMessage, handleFieldChange } = useRequiredField();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  return (
    <>
      <FormControl sx={{ mt: "16px", width: "100%" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password" error={isValid ? false : true}>
          Password
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          onChange={handleFieldChange}
          error={isValid ? false : true}
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      <p className="text-[#ff3b3b] font-sans text-sm text-left py-2">{errorMessage}</p>
    </>
  );
}

export default function InputAdornments() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: any) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="w-full flex flex-col">
      <InputEmail />
      <InputPassword />
      <div className="w-full h-auto flex items-center justify-center py-5 md">
        <div className="w-2/4 flex items-center justify-start">
          <Checkbox checked={checked} onChange={handleChange} inputProps={{ "aria-label": "controlled" }} />
          <p className="text-gray font-sans text-sm text-left break-words">Mantenha-me conectado por 2 dias</p>
        </div>
        <div className="flex items-center justify-end w-2/4">
          <Link className="text-end underline" href="login/esqueciminhasenha">
            Esqueci minha senha
          </Link>
        </div>
      </div>
      <button className="w-full px-4 py-4 bg-secondary my-4 text-primary font-sans text-lg font-bold">Entrar</button>
      <div className="w-full flex items-center justify-center py-4">
        <div className="flex items-center justify-center w-full">
          <p className="">Não tem conta?</p>
          <span className="px-1"></span>
          <Link className="text-secondary font-sans text-xl underline" href="/esqueciminhasenha">
            Cadastre-se
          </Link>
        </div>
      </div>
    </div>
  );
}
