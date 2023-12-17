// productos/producto.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './producto.entity';
import { ProductoController } from './productos.controller';
import { ProductoService } from './productos.service';
import { Categoria } from '../categorias/categorias.entity';
import { FacturaCompraProducto } from '../facturas_compra_productos/facturas-compra-productos.entity';




@Module({
  imports: [TypeOrmModule.forFeature([Producto,FacturaCompraProducto,Categoria])],
  
  controllers: [ProductoController],
  providers: [ProductoService],
})
export class ProductoModule {}
