function divide(arr, n) {
  const result = [];
  let current = [];
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    // If adding arr[i] keeps sum <= n, add to current chunk
    if (currentSum + arr[i] <= n) {
      current.push(arr[i]);
      currentSum += arr[i];
    } else {
      // If not, push current chunk and start a new one
      result.push(current);
      current = [arr[i]];
      currentSum = arr[i];
    }
  }

  // Push the last chunk if it exists
  if (current.length > 0) {
    result.push(current);
  }

  return result;
}

