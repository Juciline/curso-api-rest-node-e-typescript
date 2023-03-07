import { ICidade } from "../../models";

declare module 'knex/types/tables' {
  interface Table{
    cidade: ICidade
    //pessoa: Ipessoa
    //usuario: Iusuario
  }
}