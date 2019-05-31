import { userAge } from './../src/space-age-calc.js';

describe('userAge', function() {

  it('should return uses date of birth in years', function() {
    let earthAge = new userAge("02-13-1990").ageInYears();
    expect(Math.floor(earthAge)).toEqual(29);
    expect(Math.floor(earthAge)).not.toEqual(34);
  });

  it('should return uses date of birth in mercury years', function() {
    let mercuryAge = new userAge("02-13-1990").ageOnMercury();
    expect(Math.floor(mercuryAge)).toEqual(120);
    expect(Math.floor(mercuryAge)).not.toEqual(134);
  });
});
