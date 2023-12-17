// categorias/categoria.entity.ts

import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Producto } from '../productos/producto.entity';

@Entity({ name: 'categoria' })
export class Categoria {

@PrimaryGeneratedColumn({ name: 'id_categoria' })
id_categoria: number;

@Column({ name: 'nombre', length: 100 })
nombre: string;

@OneToMany(() => Producto, (producto) => producto.categoria)
productos: Producto[];

}
