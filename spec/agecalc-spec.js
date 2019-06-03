import { ageCalc } from './../src/agecalc.js';

describe('ageCalc', function() {

  it('should test correct age on earth', function() {
    let testDate = new ageCalc(1990, 2, 13);
    // let dob = testDate.birthday;
    let newAge = testDate.ageOnEarth();

    expect(newAge).toEqual(29);
    expect(newAge).not.toEqual(32);
  });

  it('should test users correct age on mercury', function() {
    let testDate = new ageCalc(1990, 2, 13);
    // let dob = testDate.birthday;
    let mercuryAge = testDate.ageOnMercury();

    expect(mercuryAge).toEqual(120);
    expect(mercuryAge).not.toEqual(99);
  });

  it('should test users correct age on venus', function() {
    let testDate = new ageCalc(1990, 2, 13);
    // let dob = testDate.birthday;
    let venusAge = testDate.ageOnVenus();

    expect(venusAge).toEqual(46);
    expect(venusAge).not.toEqual(66);
  });

  it('should test users correct age on mars', function() {
    let testDate = new ageCalc(1990, 2, 13);
    // let dob = testDate.birthday;
    let marsAge = testDate.ageOnMars();

    expect(marsAge).toEqual(15);
    expect(marsAge).not.toEqual(51);
  });

  it('should test users correct age on mars', function() {
    let testDate = new ageCalc(1990, 2, 13);
    // let dob = testDate.birthday;
    let jupiterAge = testDate.ageOnJupiter();

    expect(jupiterAge).toEqual(2);
    expect(jupiterAge).not.toEqual(34);
  });

  it('should return years to live based on life expectancy of 78 in Mercury', function() {
    let testDate = new ageCalc(1990, 2, 13);
    let yearsLeftOnMercury = testDate.yearsLeftOnPlanet("Mercury");

    expect(yearsLeftOnMercury).toEqual(205);
  });

});
