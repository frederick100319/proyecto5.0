// roles/rol.entity.ts

import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Usuario } from '../usuarios/usuarios.entity';
import { start } from 'repl';

@Entity()
export class Rol {
  @PrimaryGeneratedColumn({ name: 'id_rol' })
  id: number;

  @Column({ name: 'nombre_rol', length: 25 })
  nombre: string;

  @OneToMany(() => Usuario, (usuario) => usuario.fk_id_rol)
  usuarios: Usuario[];
}
