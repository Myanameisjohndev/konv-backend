export const ValidNote = (withdraw: number) => {
  let cont100 = 0;
  let cont50 = 0;
  let cont20 = 0;
  let cont10 = 0;
  let cont5 = 0;
  let cont2 = 0;
  let cont1 = 0;
  let localValue = withdraw;
  if (localValue !== 0) {
    while (localValue >= 100) {
      cont100 += 1;
      localValue -= 100;
    }
    while (localValue >= 50) {
      cont50 += 1;
      localValue -= 50;
    }
    while (localValue >= 20) {
      cont20 += 1;
      localValue -= 20;
    }
    while (localValue >= 10) {
      cont10 += 1;
      localValue -= 10;
    }
    while (localValue >= 5) {
      cont5 += 1;
      localValue -= 5;
    }
    while (localValue >= 2) {
      cont2 += 1;
      localValue -= 2;
    }
    while (localValue >= 1) {
      cont1 += 1;
      localValue -= 1;
    }
  }
  return [
    { note100: cont100 },
    { note50: cont50 },
    { note20: cont20 },
    { note10: cont10 },
    { note5: cont5 },
    { note2: cont2 },
    { note1: cont1 },
  ];
};
