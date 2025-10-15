const formData = { email: "", message: "" };
const formEl = document.querySelector(".feedback-form");
const LS_KEY = "feedback-form-state";

formEl.addEventListener("input", (event) => {
    const { name, value } = event.target;
    if (!(name in formData)) return;
    formData[name] = value;
    localStorage.setItem(LS_KEY, JSON.stringify(formData));
});
    
formEl.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!email || !message) {
        alert('Fill please all fields');
        return;
    }
    console.log({ email, message });
    
    localStorage.removeItem(LS_KEY);
    formData.email = '';
    formData.message = '';
    formEl.reset();
});

window.addEventListener("load", () => {
  const savedData = localStorage.getItem(LS_KEY);
  if (savedData) {
    const parsed = JSON.parse(savedData);
    formData.email = parsed.email || "";
    formData.message = parsed.message || "";

    formEl.elements.email.value = formData.email;
    formEl.elements.message.value = formData.message;
  }
});