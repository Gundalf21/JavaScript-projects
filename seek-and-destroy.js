function destroyer(arr, ...valsToRemove) {
  return arr.filter((elem) => !valsToRemove.includes(elem));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
