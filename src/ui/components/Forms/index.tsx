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

export default function InputAdornments() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: any) => {
    setChecked(event.target.checked);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  return (
    <div className="w-full flex flex-col">
      <FormControl sx={{ mt: "16px", width: "100%" }} variant="outlined">
        <InputLabel htmlFor="input-e-mail">E-mail</InputLabel>
        <OutlinedInput
          id="input-e-mail"
          type="text"
          endAdornment={<InputAdornment position="end"></InputAdornment>}
          label="E-mail"
        />
      </FormControl>
      <FormControl sx={{ mt: "16px", width: "100%" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
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
      <div className="w-full flex items-center justify-center py-4">
        <div className="w-2/4 flex items-center justify-start">
          <Checkbox checked={checked} onChange={handleChange} inputProps={{ "aria-label": "controlled" }} />
          <p>Mantenha-me conectado por 2 dias</p>
        </div>
        <div className="flex items-center justify-end w-2/4">
          <Link className="underline" href="/esqueciminhasenha">
            Esqueci minha senha
          </Link>
        </div>
      </div>
      <button className="w-full px-4 py-4 bg-secondary my-4 text-primary font-sans text-lg font-bold">Entrar</button>
    </div>
  );
}
