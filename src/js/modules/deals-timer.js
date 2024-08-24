function dealsTimer() {
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

      display.querySelector('.deals__timer #days').textContent = days < 10 ? '0' + days : days;
      display.querySelector('.deals__timer #hours').textContent = hours < 10 ? '0' + hours : hours;
      display.querySelector('.deals__timer #minutes').textContent =
        minutes < 10 ? '0' + minutes : minutes;
      display.querySelector('.deals__timer #seconds').textContent =
        seconds < 10 ? '0' + seconds : seconds;

      if (--timer < 0) {
        timer = 0;
      }
    }, 1000);
  }

  window.onload = function () {
    const initialTime = 3 * 24 * 60 * 60; // 3 дня в секундах
    const display = document.querySelector('.deals__timer-count');
    startTimer(initialTime, display);
  };
}

export default dealsTimer;
