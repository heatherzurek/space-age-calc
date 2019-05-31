export class Age {
  constructor(years) {
    this.years = years;
  }

  earthAgeInDays(){
    let years = new Date();
    const EarthAge = years.getFullYear() - this.years;
    return EarthAge * 365;
  }
}
