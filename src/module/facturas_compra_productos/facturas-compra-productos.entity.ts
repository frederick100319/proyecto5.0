// factura-compra-producto.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
import { Producto } from '../productos/producto.entity';


@Entity({ name: 'factura_compra_producto' })
export class FacturaCompraProducto {
  @PrimaryGeneratedColumn({ name: 'id_factura_producto' })
  id_factura_producto: number;



  @ManyToOne(() => Producto, (producto) => producto.facturaCompraProductos)
  @JoinColumn({ name: 'fk_id_producto' })
  fk_id_producto: Producto;

  @Column({ name: 'precio_venta' })
  precio_venta: number;

}


