function permute(arr) {
  const result = [];

  function helper(current, remaining) {
    if (remaining.length === 0) {
      result.push(current.slice()); // Create a copy of the current permutation
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      const element = remaining[i];
      current.push(element);
      const remainingCopy = remaining.slice(); // Create a copy to avoid mutation
      remainingCopy.splice(i, 1); // Remove the used element from the remaining copy
      helper(current, remainingCopy);
      current.pop(); // Backtrack by removing the element
    }
  }

  helper([], arr.slice()); // Start with an empty permutation and a copy of the input array
  return result;
}

const testData = [
  [1, 33, 5],
  [1, 3, 5, 7],
  [2, 4],
];

testData.forEach((data) => {
  console.log(permute(data));
});
