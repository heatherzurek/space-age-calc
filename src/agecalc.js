class ageCalc {
  constructor(birthdate) {
    this.birthdate = new Date(birthdate);
  }

  ageOnEarth() {
    let today = new Date();
    let year = today.getFullYear();
    let age = year - (this.birthdate.getFullYear());
    let m = today.getMonth() - (this.birthdate.getMonth());
    if (m < 0 || (m === 0 && today.getDate() < (this.birthdate.getDate()))) {
      age--;
    }
    return age;
  }

  ageOnMercury() {
    let age = this.ageOnEarth();
    let mercuryAge = Math.floor(age / .24);
    return mercuryAge;
  }

  ageOnVenus() {
    let age = this.ageOnEarth();
    let venusAge = Math.floor(age / .62);
    return venusAge;
  }

  ageOnMars() {
    let age = this.ageOnEarth();
    let marsAge = Math.floor(age / 1.88);
    return marsAge
  }

  ageOnJupiter() {
    let age = this.ageOnEarth();
    let jupiterAge = Math.floor(age / 11.86);
    return jupiterAge;
  }


  //avg us life expect 78
  // jupiter 11.86

}
module.exports = {
  ageCalc:ageCalc
}
