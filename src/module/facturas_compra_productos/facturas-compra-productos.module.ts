// facturas/factura-compra-producto.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacturaCompraProducto } from './facturas-compra-productos.entity';
import { FacturaCompraProductoController } from './facturas-compra-productos.controller';
import { FacturaCompraProductoService } from './facturas-compra-productos.service';
import { Producto } from '../productos/producto.entity';


@Module({
  imports: [TypeOrmModule.forFeature([FacturaCompraProducto,Producto])],
  controllers: [FacturaCompraProductoController],
  providers: [FacturaCompraProductoService],
})
export class FacturaCompraProductoModule {}
