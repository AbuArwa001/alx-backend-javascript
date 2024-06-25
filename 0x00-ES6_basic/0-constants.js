//  0-constants.js
export const taskFirst = function taskFirst(task = 'I prefer const when I can.') {
  return task;
};

export function getLast() {
  return ' is okay';
}

/* eslint-disable import/no-mutable-exports, prefer-const */
export let taskNext = function taskNext(combination = 'But sometimes let') {
  return combination + getLast();
};
/* eslint-enable import/no-mutable-exports, prefer-const */
