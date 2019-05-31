//get users date of birth as input
// class userAge {
//   constructor(dob) {
//     this.dob = new Date(dob);
//     //get current date
//     this.today = new Date();
//     this.age = Math.abs(this.today - this.dob);
//   }

//why didnt my class work?

export function userAge(dob) {
  this.dob = new Date(dob);
  this.today = new Date();
  this.age = Math.floor(this.today - this.dob);
}
  //find their age in years
  userAge.prototype.ageInYears = function () {
    return this.age/(365*24*60*60*1000);
  }

  userAge.prototype.ageOnMercury = function () {
    return this.age /(.24);
    console.log(ageOnMercury);
    // let mercuryAge = Math.floor(this.ageOnMercury() / .24);
    // return (mercuryAge);
  }

  // userAge.prototype.ageOnVenus = function () {
  //   return this.age / .62;
  // }

  //this is what i was using with my object
  // ageOnMercury() {
  //   let mercuryAge = Math.floor(this.ageInYears() / .24);
  //   return (mercuryAge);
  // }
  //
  //divide their age by venus years
  // ageOnVenus() {
  //   let venusAge = Math.floor(this.ageInYears() / .62);
  //   return (venusAge);
  // }
  //
  //divide their age by mars years
  // ageOnMars() {
  //   let marsAge = Math.floor(this.ageInYears() / 1.88);
  //   return (marsAge);
  // }
  //
  // ageOnJupiter() {
  //divide their age by Jupiter years
  //   let jupiterAge = Math.floor(this.ageInYears() / 11.86);
  //   return (jupiterAge);
  // }

  // module.exports = userAge

//calculate users life expectancy
//return number of years theyve lived past their life expectancy
