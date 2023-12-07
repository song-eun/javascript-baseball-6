const validateNumbers = (input) => {
  const numbers = Number(input);
  if (isNaN(numbers)) throw new Error('[ERROR]');
  input.split('').map((v) => {
    if (Number(v) < 1 || Number(v) > 9) throw new Error('[ERROR]');
  });

  let set = new Set(input);
  console.log(set);
  if (set.size !== 3) throw new Error('[ERROR]');
};

export default validateNumbers;
