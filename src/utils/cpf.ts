const calculateDigit = (numbers: number[]) => {
  const sum = numbers.reduce((acc, num, idx) => acc + num * (10 - idx), 0);
  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
};

export const generateRandomCpf = () => {
  const randomNumbers = Array.from({ length: 9 }, () =>
    Math.floor(Math.random() * 10)
  );
  const firstDigit = calculateDigit(randomNumbers);
  const secondDigit = calculateDigit([...randomNumbers, firstDigit]);

  return [...randomNumbers, firstDigit, secondDigit].join("");
};
