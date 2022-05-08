function minElevatorTime(arr, lift) {
  arr.sort(function (a, b) {
    return b - a;
  });

  let minTime = 0;

  let temp = 0;
  let lift_number;
  for (var i = 0; i < arr.length; i++) {
    lift_number =
      Math.ceil(arr[i] / lift) > lift
        ? Math.ceil(arr[i] / lift) - 1
        : Math.ceil(arr[i] / lift);

    if (temp != lift_number) {
      minTime = minTime + arr[i];
    }
    temp = lift_number;
  }

  return minTime;
}

var arr = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

console.log(minElevatorTime(arr, 3));
