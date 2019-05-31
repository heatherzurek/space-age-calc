import { Age } from './../src/space-agr-calc.js';

describe('Age', function() {
  it('shoud return earth age in days', function() {
    let testAge = new Age("1990");
    expect(testAge.earthAgeInDays()).toEqual(10950);
  });
});
