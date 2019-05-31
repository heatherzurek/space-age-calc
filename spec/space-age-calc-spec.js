import { CalculateAge } from '/../src/space-age-calc.js';

describe('CalculateAge', function() {

  it('should find age in Earth years based on inputted birth date' , function() {
    let birthdate = new CalculateAge(new Date('Feb 13, 1990'));
    expect(birthdate.CalculateAge()).toEqual(29);
    birthdate = new CalculateAge(new Date('August 06, 1987'));
    expect(birthdate.CalculateAge()).not.toEqual(34);
  });
});
