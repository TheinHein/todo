import { useState } from "react";
export default function useToggleState(init = false) {
  const [state, setState] = useState(init);
  const toggle = (id) => {
    setState(!state);
  };
  return [state, toggle];
}
