import IProjeto from "./iProjeto";

export default interface ITarefa {
    duracaoEmSegundos: number;
    descricao: string;
    projeto: IProjeto
}