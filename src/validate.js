export default function validate(input) {
  const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ'-]+(?: [A-Za-zÀ-ÖØ-öø-ÿ'-]+)+$/;
  const isValid = nameRegex.test(input.value.trim());

  if (!isValid) {
    input.classList.add("invalid");
    input.setAttribute("aria-invalid", "true");
  } else {
    input.classList.remove("invalid");
    input.setAttribute("aria-invalid", "false");
  }

  console.log(isValid);
  return isValid;
}
