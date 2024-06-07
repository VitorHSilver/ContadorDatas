import Countdown from './countdown.js';

const btnClick = document.getElementById('btnClick');

function handleClick(e) {
     e.preventDefault();
     const dateUser = document.getElementById('data').value;
     const timeUser = document.getElementById('hora').value;

     // convertendo as entradas do usuário
     const dateParts = dateUser.split('-');
     const timeParts = timeUser.split(':');

     const months = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
     ];
     const formattedDate = `${dateParts[2]} ${months[dateParts[1] - 1]} ${dateParts[0]} ${timeParts[0]}:${
          timeParts[1]
     }:00 GMT-0300`;
     let completeDate = new Countdown(formattedDate);
     startInterval(completeDate);
}

// Mostrando os valores
function startInterval(completeDate) {
     setInterval(() => {
          const paragrafo = document.querySelector('.linhaContagem');
          paragrafo.innerHTML = '<strong> Dias </strong>: ' + `<span> ${completeDate.total.days}</span>`;
          paragrafo.innerHTML += '<strong> Mês </strong>: ' + `<span> ${completeDate.month}</span>`;
          paragrafo.innerHTML += '<strong> Horas </strong>: ' + `<span> ${completeDate.total.hours}</span>`;
          paragrafo.innerHTML += '<strong> Minutos </strong>: ' + `<span> ${completeDate.total.minutes}</span>`;
          paragrafo.innerHTML += '<strong> Segundos </strong>: ' + `<span> ${completeDate.total.seconds}</span>`;
     }, 10);
}
btnClick.addEventListener('click', handleClick);

//exemplos
const dataParaONatal = new Countdown('24 December 2024 23:59:59 GMT-0300');
const dataParaDiadasMulheres = new Countdown('07 December 2025 23:59:59 GMT-0300');
