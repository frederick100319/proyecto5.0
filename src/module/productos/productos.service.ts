import { Repository, Like, getRepository, SelectQueryBuilder } from 'typeorm';
import { Producto } from './producto.entity';
import { NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(Producto)
    private readonly productosRepository: Repository<Producto>,
  ) {}
  async getAllProducts(): Promise<Producto[]> {
    const products = await this.productosRepository
      .createQueryBuilder('producto')
      .leftJoinAndSelect('producto.categoria', 'categoria')
      .leftJoinAndSelect('producto.facturaCompraProductos', 'facturaCompraProducto')
      .getMany();
  
    if (!products || products.length === 0) {
      throw new NotFoundException('No se encontraron productos');
    }
  
    return products;
  }
  async getProductWithCategory(id_producto: string): Promise<Producto | undefined> {
    const productFound = await this.productosRepository
      .createQueryBuilder('producto')
      .leftJoinAndSelect('producto.categoria', 'categoria')
      .leftJoinAndSelect('producto.facturaCompraProductos', 'facturaCompraProducto')
      .where('producto.id_producto = :id_producto', { id_producto: String(id_producto) })
      .getOne();

    if (!productFound) {
      throw new NotFoundException(`No se encontró un producto con ID ${id_producto}`);
    }

    return productFound;
  }
}








