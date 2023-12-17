// factura-compra-producto.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FacturaCompraProducto } from './facturas-compra-productos.entity';

@Injectable()
export class FacturaCompraProductoService {
  constructor(
    @InjectRepository(FacturaCompraProducto)
    private readonly facturaCompraProductoRepository: Repository<FacturaCompraProducto>,
  ) {}

  findValorProducto(idProducto: string): Promise<number | undefined> {
    return this.facturaCompraProductoRepository
      .createQueryBuilder('factura_compra_producto')
      .select('factura_compra_producto.precio_venta', 'valorProducto')
      .where('factura_compra_producto.fk_id_producto = :idProducto', { idProducto })
      .getRawOne()
      .then(result => (result ? parseFloat(result.valorProducto) : undefined));
  }
}

