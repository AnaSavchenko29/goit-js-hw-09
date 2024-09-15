const formData = { email: '', message: '' };

const formEl = document.querySelector('.feedback-form');

const formState = localStorage.getItem('feedback-form-state');

if (formState) {
  const parsedData = JSON.parse(formState);
  formData.email = parsedData.email || '';
  formData.message = parsedData.message || '';

  formEl.elements.email.value = formData.email;
  formEl.elements.message.value = formData.message;
}

function handlInput(event) {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function handleSubmitForm(event) {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    return alert('Fill please all fields');
  }

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  formEl.reset();
}

formEl.addEventListener('input', handlInput);
formEl.addEventListener('submit', handleSubmitForm);
