import { Endereco } from "./endereco";
import { Escola } from "./escola";

export class Cliente {
    id: number;
    name: string;
    email: string;
    phone: string;
    imageUrl: string;
    endereco: Endereco;
    escola: Escola;
}