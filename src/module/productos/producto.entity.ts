// productos/producto.entity.ts

import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Categoria } from '../categorias/categorias.entity';
import { FacturaCompraProducto } from '../facturas_compra_productos/facturas-compra-productos.entity';


@Entity({ name: 'producto' })
export class Producto {
  @PrimaryGeneratedColumn({ name: 'id_producto' })
  id_producto: number;

  @Column({ name: 'nombre' })
  nombre: string;

  @Column({ name: 'descripcion' })
  descripcion: string;

  @Column({ name: 'stock' })
  stock: number;


  @ManyToOne(type => Categoria ,categoria=>categoria.productos)
  @JoinColumn({ name: 'fk_id_categoria' })
  categoria: Categoria;


  @Column({ name: 'fotourl' })
  fotourl: string;

  @OneToMany(() => FacturaCompraProducto, (facturaCompraProducto) => facturaCompraProducto.fk_id_producto)
  facturaCompraProductos: FacturaCompraProducto[];


}