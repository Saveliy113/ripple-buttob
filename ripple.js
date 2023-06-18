const buttons = document.querySelectorAll('a');

buttons.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    let x = event.clientX - event.target.offsetLeft;
    let y = event.clientY - event.target.offsetTop;

    let ripples = document.createElement('span');
    ripples.style.left = `${x}px`;
    ripples.style.top = `${y}px`;
    event.target.appendChild(ripples);

    setTimeout(() => {
      ripples.remove();
    }, 1000);
  });
});
