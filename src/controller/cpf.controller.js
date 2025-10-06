export class CpfController {
  constructor(cpfService) {
    this.cpfService = cpfService;
  }

  generateCpf() {
    return this.cpfService.generateCpf();
  }

  validateCpf(cpf) {
    return this.cpfService.validateCpf(cpf);
  }
}
