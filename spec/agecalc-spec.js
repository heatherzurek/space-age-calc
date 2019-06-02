import { ageCalc } from './../src/agecalc.js';

describe('ageCalc', function() {

  it('should test correct age on earth', function() {
    let testDate = new ageCalc(new Date(1990, 2, 13));
    let dob = testDate.birthday;
    let newAge = testDate.ageOnEarth(dob);

    expect(newAge).toEqual(29);
    expect(newAge).not.toEqual(32);
  });

  it('should test users correct age on mercury', function() {
    let testDate = new ageCalc(new Date(1990, 2, 13));
    let dob = testDate.birthday;
    let mercuryAge = testDate.ageOnMercury(dob);

    expect(mercuryAge).toEqual(120);
    expect(mercuryAge).not.toEqual(99);
  });

});
