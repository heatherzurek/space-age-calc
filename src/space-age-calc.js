export class Age {
  constructor(birthdate) {
    this.birthdate = birthdate;
  }

  function getAge(dateString) {
      let today = new Date();
      let birthdate = new Date(dateString);
      let age = today.getFullYear() - birthdate.getFullYear();
      let m = today.getMonth() - birthdate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
          age--;
      }
      return age;
  }
}
