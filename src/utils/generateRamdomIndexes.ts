const generateRandomIndexes = (twoTodos: boolean) => {
  const firstNumber = Math.floor(Math.random() * 9);
  let secondNumber: number | null = null;
  if (twoTodos) {
    do {
      secondNumber = Math.floor(Math.random() * 9);
    } while (secondNumber === firstNumber);
  }

  return [firstNumber, secondNumber];
};

export default generateRandomIndexes;
