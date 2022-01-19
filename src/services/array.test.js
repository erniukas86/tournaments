/* eslint-disable no-undef */
import { getUniquePairs } from './array';

const initialData = [
  { params: [], expected: [] },
  { params: [1], expected: [] },
  { params: [1, 5], expected: [[1, 5]] }
];

test('Test unique pairs', () => {
  initialData.forEach(data => {
    expect(getUniquePairs(data.params)).toEqual(data.expected);
  });
});
