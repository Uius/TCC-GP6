import { useState } from "react";

export function useMostrarSenha() {
  const [isVisible, setIsVisible] = useState(false);

  function toggle() {
    setIsVisible((prev) => !prev);
  }

  const inputType = isVisible ? "text" : "password";

  return { isVisible, toggle, inputType };
}