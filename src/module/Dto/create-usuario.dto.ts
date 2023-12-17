import { Rol } from "../roles/rol.entity";

export class CreateUsuario {
    usuario: string;
    contrasena: string;
    nombre: string;
    apellido: string;
    correo_electronico: string;
    primeraVez: boolean;
    fk_id_rol?:number;
  }