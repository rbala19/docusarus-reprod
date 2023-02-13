// @owner Foundations

import should from 'should/as-function';
import * as basic from '../../src/basic';

describe('Basic', () => {
  describe('#subtract()', () => {
    it('should subtract the second number from the first number', () => {
      should(basic.subtract(2, 4)).equal(-2);
    });
  });
});
