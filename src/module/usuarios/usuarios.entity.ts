// usuario.entity.ts

import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Rol} from '../roles/rol.entity';



@Entity({ name: 'usuario' })
export class Usuario {
  @PrimaryColumn({ name: 'usuario', type:'varchar', length: 25 })
  usuario: string;

  @Column({ name: 'contrasena', type:'varchar', length: 25  })
  contrasena: string;

  @Column({ name: 'nombre', type:'varchar', length: 25 })
  nombre: string;

  @Column({ name: 'apellido', type:'varchar', length: 25 })
  apellido: string;

  @Column({ name: 'correo_electronico', type:'varchar', length: 50 })
  correo_electronico: string;

  @Column({ name: 'primera_vez' })
  primeraVez: boolean;

  @ManyToOne(()=> Rol, (rol) => rol.usuarios)
  @JoinColumn({ name: 'fk_id_rol', foreignKeyConstraintName: 'usuario_fk_id_rol_fkey'})
  fk_id_rol: number;

  
}

