// factura-compra-producto.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { FacturaCompraProductoService } from './facturas-compra-productos.service';

@Controller('factura-compra-producto')
export class FacturaCompraProductoController {
  constructor(private readonly facturaCompraProductoService: FacturaCompraProductoService) {}

  @Get(':idProducto')
  findValorProducto(@Param('idProducto') idProducto: string): Promise<number | undefined> {
    return this.facturaCompraProductoService.findValorProducto(idProducto);
  }
}

