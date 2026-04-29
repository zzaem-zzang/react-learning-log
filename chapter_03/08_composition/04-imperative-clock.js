// 1초마다 logClockTime 함수를 실행한다
  setInterval(logClockTime, 1000);

  function logClockTime() {

      // 현재 시간을 문자열 형태로 가져온다
      var time = getClockTime();

      // 현재 시간을 콘솔에 출력한다
      console.clear();
      console.log(time);
  }

  function getClockTime() {

      // 현재 날짜와 시간 정보를 가져온다
      var date = new Date();

      // ampm은 기본값을 AM으로 둔다
      var time = {
          hours: date.getHours(),
          minutes: date.getMinutes(),
          seconds: date.getSeconds(),
          ampm: "AM"
      }

      // 12시면 PM으로 바꾼다
      if (time.hours == 12) {
          time.ampm = "PM";
      } else if (time.hours > 12) {
          time.ampm = "PM";
          time.hours -= 12;
      }

      // 시간이 한 자리면 앞에 0을 붙인다
      if (time.hours < 10) {
          time.hours = "0" + time.hours;
      }

      // 분이 한 자리면 앞에 0을 붙인다
      if (time.minutes < 10) {
          time.minutes = "0" + time.minutes;
      }

      // 초가 한 자리면 앞에 0을 붙인다
      if (time.seconds < 10) {
          time.seconds = "0" + time.seconds;
      }

      // 시:분:초 AM/PM 형태의 문자열로 만들어서 반환한다
      return time.hours + ":"
          + time.minutes + ":"
          + time.seconds + " "
          + time.ampm;

  }
