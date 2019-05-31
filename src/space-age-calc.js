export class ageCalculator {
  constructor(year, birthdate) {
    this.year = year;
    // this.month = month;
    // this.day = day;
    this.birthdate = birthdate;
    this.dateToSeconds = 2239056000;
    this.avgLifeExpect = 71;
  }

  dateToSeconds() {
    let howManySeconds = (((this.year * 365)*24)*60)*60;
    return howManySeconds;
  }
}

//average us life expectancy is 78
//worldwife average life expectancy is 71
