document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('leadForm');
const message = document.getElementById('formMessage');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const name = formData.get('name');

  message.textContent = `Thanks, ${name}! We received your request and will contact you shortly.`;
  form.reset();
});
