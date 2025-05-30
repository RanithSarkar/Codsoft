function appendValue(val) {
  document.getElementById('display').value += val;
  animateButton(val);
}

function clearDisplay() {
  document.getElementById('display').value = '';
  animateButton('C');
}

function calculate() {
  try {
    document.getElementById('display').value = eval(document.getElementById('display').value);
    animateButton('=');
  } catch {
    document.getElementById('display').value = 'Error';
  }
}

function animateButton(val) {
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(btn => {
    if (btn.innerText === val) {
      btn.classList.add('animate');
      setTimeout(() => btn.classList.remove('animate'), 200);
    }
  });
}