const updateClock = () => {
  const elHour = document.querySelector('.m-time-hour');
  const elMinute = document.querySelector('.m-time-minute');
  const elColon = document.querySelector('.m-time-colon');
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;

  elHour.textContent = hours;
  elMinute.textContent = minutes;
};

setInterval(updateClock, 1000);
