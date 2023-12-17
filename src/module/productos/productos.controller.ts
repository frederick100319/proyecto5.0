// productos.controller.ts

import { Controller, Get } from '@nestjs/common';
import { ProductoService } from './productos.service';
import { Producto } from './producto.entity';
import { Param } from '@nestjs/common';

@Controller('productos')
export class ProductoController {
  constructor(private readonly productoService: ProductoService) {}
  @Get()
  getAllProducts(): Promise<Producto[]> {
    return this.productoService.getAllProducts();
  }
  @Get(':id_producto')
  getProductWithCategory(@Param('id_producto') id_producto: string): Promise<Producto | undefined> {
    return this.productoService.getProductWithCategory(id_producto);
  }
}

