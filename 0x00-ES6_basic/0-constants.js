export const taskFirst = function taskFirst() {
    const task = 'I prefer const when I can.';
    return task;
  }
  
  export function getLast() {
    return ' is okay';
  }
  
  export let taskNext = function taskNext() {
    let combination = 'But sometimes let';
    combination += getLast();
    return combination;
  }
  