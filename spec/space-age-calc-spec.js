import { AgeCalculator } from './../src/space-age-calc.js';

describe('ageCalculator', function() {

  it('should output the persons age' , function() {
     let birthdate = new AgeCalculator(new Date('February 13, 1990'));
      expect(age.GetEarthAge()).toEqual(120);
      age = new AgeCalculator(new Date('January 31, 1995'));
      expect(age.GetMercuryAge()).toEqual(34);
   });
});
