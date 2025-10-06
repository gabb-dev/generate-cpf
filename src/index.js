import { CpfController } from "./controller/cpf.controller.js";
import { CpfService } from "./service/cpf.service.js";

const cpfService = new CpfService();
const cpfController = new CpfController(cpfService);

console.log(cpfController.generateCpf());
