const form = document.querySelector('form');
const bmiValue = document.querySelector('.bmi-value');
const bmiMessage = document.querySelector('.bmi-message');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseFloat(document.querySelector('#height').value);
  const weight = parseFloat(document.querySelector('#weight').value);

  if (!height || height <= 0 || isNaN(height)) {
    bmiValue.textContent = '';
    bmiMessage.textContent = 'Please enter a valid height';
    bmiMessage.style.color = '#dc3545';
  } else if (!weight || weight <= 0 || isNaN(weight)) {
    bmiValue.textContent = '';
    bmiMessage.textContent = 'Please enter a valid weight';
    bmiMessage.style.color = '#dc3545';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    bmiValue.textContent = bmi;

    let message = '';
    let color = '';

    if (bmi < 18.6) {
      message = 'Underweight';
      color = '#ffc107';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      message = 'Normal Range';
      color = '#28a745';
    } else {
      message = 'Overweight';
      color = '#dc3545';
    }

    bmiMessage.textContent = message;
    bmiMessage.style.color = color;
    bmiValue.style.color = color;
  }
});
