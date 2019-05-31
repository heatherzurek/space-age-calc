function CalculateAge(year, month, day) {
  let dateNumber = dateInput.getUTCDay();
  let dayOfTheWeek = "";


  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getUTCMonth() + 1;
  let currentDay = currentDate.getUTCDate();
  let age = currentYear - year;
  if (currentMonth > month) {
    return age;
  } else {
    if (currentDay >= day) {
      return age;
    } else {
      age--;
      return age;
    }
  }
}
