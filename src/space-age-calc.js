//get users date of birth as input
class Age {
  constructor(dob) {
    this.dob = new Date(dob);
    //get current date
    this.now = new Date();
    this.age = Math.abs(this.now - this.dob);
  }
  //find their age in years
  findAgeInYears() {
    return this.age/(365*24*60*60*1000);
  }
  //divide their age by mercury years
  // 
  // mercuryAge() {
  //   let mercuryAge = Math.floor(this.findAgeInYears() / .24);
  //   return (mercuryAge);
  // }
}

module.exports = Age;

//divide their age by venus years
//divide their age by mars years
//divide their age by Jupiter years
//calculate users life expectancy
//return number of years theyve lived past their life expectancy
