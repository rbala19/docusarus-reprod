// @owner Foundations

import {add} from './utils';

/**
 * Subtracts the second number from the first number.
 *
 * @param a first number
 * @param b second number
 * @returns the difference of the second number from the first number
 */
export function subtract(a: number, b: number) {
  return add(a, -b);
}
