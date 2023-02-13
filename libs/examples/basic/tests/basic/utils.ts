// @owner Foundations

import should from 'should/as-function';
import * as utils from '../../src/basic/utils';

describe('Utils', () => {
  describe('#add()', () => {
    it('should return the sum', () => {
      should(utils.add(5, 6)).equal(11);
    });
  });
});
