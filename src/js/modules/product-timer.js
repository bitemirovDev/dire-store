function productTimer() {
  function startTimer(duration, display) {
    let timer = duration,
      days,
      hours,
      minutes,
      seconds;

    setInterval(() => {
      days = Math.floor(timer / (24 * 60 * 60));
      hours = Math.floor((timer % (24 * 60 * 60)) / (60 * 60));
      minutes = Math.floor((timer % (60 * 60)) / 60);
      seconds = Math.floor(timer % 60);

      display.querySelector('#days').textContent = days < 10 ? '0' + days : days;
      display.querySelector('#hours').textContent = hours < 10 ? '0' + hours : hours;
      display.querySelector('#minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
      display.querySelector('#seconds').textContent = seconds < 10 ? '0' + seconds : seconds;

      if (--timer < 0) {
        timer = 0;
      }
    }, 1000);
  }

  window.onload = function () {
    const initialTime = 3 * 24 * 60 * 60; // 3 дня в секундах
    const display = document.querySelector('.product__timer-counter');
    startTimer(initialTime, display);
  };
}

export default productTimer;
