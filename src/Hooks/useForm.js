import React, { useState } from "react";

function UseForm() {
  const [value, setValue] = useState("");
  function onChange({ target }) {
    setValue(target.value);
  }
  return {
    value,
    setValue,
    onChange,
  };
}

export default UseForm;
