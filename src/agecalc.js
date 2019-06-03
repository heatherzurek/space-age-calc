const planetConstants = {
  "Mercury": .24,
  "Venus": .64,
  "Mars": 1.88,
  "Jupiter": 11.86,
}

export class ageCalc {
  constructor(year, month, day) {
    this.birthdate = new Date(year, month, day);
    // this.planetConstants = {
    //   "Mercury": .24,
    //   "Venus": .64,
    //   "Mars": 1.88,
    //   "Jupiter": 11.86,
    // }
  }

  yearsLeftOnPlanet(planet) {
    const lifeExpectancyOnEarth = 78;
    let lifeExpectancyOnPlanet = Math.floor(lifeExpectancyOnEarth / this.planetConstants[planet]);
    let yearsLeft = lifeExpectancyOnPlanet - this.ageOnPlanet(planet);
    return yearsLeft;
  }

  ageOnEarth() {
    let today = new Date();
    let year = today.getFullYear();
    let age = year - (this.birthdate.getFullYear());
    let month = today.getMonth() - (this.birthdate.getMonth());
    if (month < 0 || (month === 0 && today.getDate() < (this.birthdate.getDate()))) {
      age--;
    }
    return age;
  }

  ageOnPlanet(planet) {
    let age = this.ageOnEarth();
    let mercuryAge = Math.floor(age / this.planetConstants[planet]);
    return mercuryAge;
  }

  // ageOnVenus() {
  //   let age = this.ageOnEarth();
  //   let venusAge = Math.floor(age / .62);
  //   return venusAge;
  // }

  // ageOnMars() {
  //   let age = this.ageOnEarth();
  //   let marsAge = Math.floor(age / 1.88);
  //   return marsAge
  // }

  // ageOnJupiter() {
  //   let age = this.ageOnEarth();
  //   let jupiterAge = Math.floor(age / 11.86);
  //   return jupiterAge;
  }


  //avg us life expect 78
  // jupiter 11.86

}
// module.exports = {
//   ageCalc:ageCalc
// }
