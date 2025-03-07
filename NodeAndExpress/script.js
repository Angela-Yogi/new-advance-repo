document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const message = document.getElementById("formMessage");

  form.addEventListener("submit", (event) => {
      event.preventDefault();
      
      message.innerHTML = "Thank you for your message!";
      message.style.color = "green";

      form.reset();
  });
});
