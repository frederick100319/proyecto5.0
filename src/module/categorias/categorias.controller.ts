// categorias/categoria.controller.ts

import { Controller, Get } from '@nestjs/common';
import { CategoriaService } from './categorias.service';
import { Categoria } from './categorias.entity';

@Controller('categorias')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @Get()
  findAll(): Promise<Categoria[]> {
    return this.categoriaService.findAll();
  }
}
