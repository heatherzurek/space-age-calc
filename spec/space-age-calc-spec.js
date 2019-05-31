import { userAge } from './../src/space-age-calc.js';

describe('userAge', function() {

  it('should return uses date of birth in years', function() {
    let earthAge = new userAge("02-13-1990").ageInYears();
    expect(Math.floor(earthAge)).toEqual(29);
    expect(Math.floor(earthAge)).not.toEqual(34);
  });

  it('should return the date of birth in mercury years', function() {
    let mercuryAge = new userAge("08-06-1987").ageOnMercury();

    expect(Math.floor(mercuryAge)).toEqual(133);
  })

  // it('should return date of birth in mercury years', function() {
  //   let mercuryAge = new userAge("02-13-1990").ageOnMercury();
  //   expect(Math.floor(mercuryAge)).toEqual(121);
  //   expect(Math.floor(mercuryAge)).not.toEqual(134);
  // });
  //
  // it('should return date of birth in venus years', function() {
  //   let venusAge = new userAge("02-13-1990").ageOnVenus();
  //   expect(Math.floor(venusAge)).toEqual(46);
  //   expect(Math.floor(venusAge)).not.toEqual(134);
  // });
});
