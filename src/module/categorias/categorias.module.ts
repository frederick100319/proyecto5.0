// categorias/categoria.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './categorias.entity';
import { CategoriaController } from './categorias.controller';
import { CategoriaService } from './categorias.service';
import { Producto } from '../productos/producto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Categoria, Producto])],
  controllers: [CategoriaController],
  providers: [CategoriaService],
})
export class CategoriaModule {}
