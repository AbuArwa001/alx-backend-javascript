//  0-constants.js
export const taskFirst = function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
};

export function getLast() {
  return ' is okay';
}

/* eslint-disable import/no-mutable-exports, prefer-const */
export let taskNext = function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();
  return combination;
};
/* eslint-enable import/no-mutable-exports, prefer-const */
