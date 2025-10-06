export class CpfService {
  generateCpf(max = 9, min = 0) {
    let cpf = "";
    for (let i = 0; i < 9; i++) {
      cpf += String(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    cpf += this.#createDigitOne(cpf);
    cpf += this.#createDigitTwo(cpf);
    return cpf;
  }

  #createDigitOne(cpf) {
    let weight = 10;
    let sum = 0;

    for (let number of cpf) {
      sum += +number * weight;
      weight--;
    }
    let digitOne = sum % 11;
    if (digitOne === 0 || digitOne === 1) return (digitOne = 0);

    digitOne = 11 - digitOne;
    return digitOne;
  }

  #createDigitTwo(cpf) {
    let weight = 11;
    let sum = 0;

    for (let number of cpf) {
      sum += +number * weight;
      weight--;
    }
    let digitTwo = sum % 11;
    if (digitTwo === 0 || digitTwo === 1) return (digitTwo = 0);

    digitTwo = 11 - digitTwo;
    return digitTwo;
  }
}
