import { Age } from './../src/space-age-calc.js';

describe('Age', function() {

  it('should return uses date of birth in years', function() {
    let earthAge = new Age("02-13-1990").findAgeInYears();
    expect(Math.floor(earthAge)).toEqual(29);
    expect(Math.floor(earthAge)).not.toEqual(34);
  });
});
