export function handleNameCardChange(value, setNameCard, nameRegex) {
  if (nameRegex.test(value) || value === "") {
    setNameCard(value);
  }
}

export function handleNumberCardChange(value, setNumberCard, numberRegex) {
  if (numberRegex.test(value) || value === "") {
    setNumberCard(value);
  }
}

export function handleCvvCardChange(value, setCvvCard, cvvCardRegex) {
  if (cvvCardRegex.test(value) || value === "") {
    setCvvCard(value);
  }
}
