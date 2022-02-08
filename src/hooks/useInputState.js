import { useState } from "react";
export default function useInputState(initialState) {
  const [state, setState] = useState(initialState);
  const handleInput = (e) => {
    setState(e.target.value);
  };
  const clearInput = () => {
    setState("");
  };
  return [state, handleInput, clearInput];
}
