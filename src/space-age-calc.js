export class Age {
  constructor(birthdate) {
    this. birthdate =  birthdate;

    function calculateAge(year, month, day) {
      var currentDate = new Date();
      var currentYear = currentDate.getFullYear();
      var currentMonth = currentDate.getUTCMonth() + 1;
      var currentDay = currentDate.getUTCDate();

      var age = currentYear - year;
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
  }

}
