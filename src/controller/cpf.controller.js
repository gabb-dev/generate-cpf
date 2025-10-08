import { CpfService } from "../service/cpf.service";

class CpfController {
  constructor(cpfService) {
    this.cpfService = cpfService;
  }

  generateCpf() {
    return this.cpfService.generateCpf();
  }
}

export const cpfController = new CpfController(new CpfService());
