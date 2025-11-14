import { useState } from "react";

export default function useRadio(initialValue = null, canNotUncheck = false) {
  const [selectedRadioValue, setSelectedRadioValue] = useState(initialValue);

  const handleRadioChange = (value) => {
    setSelectedRadioValue((prev) => {
      if (prev === value) {
        return canNotUncheck ? prev : null;
      }
      return value;
    });
  };

  return { selectedRadioValue, setSelectedRadioValue, handleRadioChange };
}
