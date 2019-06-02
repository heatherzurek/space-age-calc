class ageCalc {
  //creates an instance of the users birth date
  constructor(birthdate) {
    this.birthdate = new Date(birthdate);
  }

  ageOnEarth() {
    let today = new Date();
    //gets todays date
    let year = today.getUTCFullYear();
    //method returns the year in the specified date according to universal time
    let age = year - (this.birthdate.getUTCFullYear());
    //subtracts todays date from birth year
    return age;
  }

  ageOnMercury() {
    let age = this.ageOnEarth();
    let mercuryAge = Math.floor(age / .24);
    return mercuryAge;
  }

}
module.exports = {
  ageCalc:ageCalc
}
