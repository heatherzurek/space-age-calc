import { Age, calculateAge } from './../src/space-age-calc.js';

describe('Age', function() {

  it('should find age in Earth years based on inputted birth date' , function() {
    let birthdate = new Age(new Date('Feb 13, 1990'));
    expect(birthdate.calculateAge()).toEqual(29);
    birthdate = new Age(new Date('August 06, 1987'));
    expect(birthdate.calculateAge()).not.toEqual(34);
  });
});
