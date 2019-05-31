import { ageCalculator } from './../src/space-age-calc.js';

describe('ageCalculator', function() {

  it('should take age and convert into seconds', function() {
  let ageCalc = new ageCalculator(29);
  expect(ageCalc.dateToSeconds()).toEqual(914544000);
  });
});
