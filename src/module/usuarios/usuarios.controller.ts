// api/src/usuarios/usuario.controller.ts

import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { Usuario } from './usuarios.entity';
import { UsuarioService } from './usuarios.service';
import { CreateUsuario } from '../Dto/create-usuario.dto';

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}



  @Get(':id')
  findOneWithRoleId(@Param('id') id: string): Promise<Usuario | undefined> {
    return this.usuarioService.findOneWithRoleId(String(id));
  }

  @Post()
  create(@Body() usuario: CreateUsuario): Promise<CreateUsuario> {
    console.log(usuario)
    return this.usuarioService.create(usuario);
  }

  @Put('update/:id')
  update(@Param('id') id: string, @Body() usuario: Usuario): Promise<Usuario | undefined> {
    return this.usuarioService.update(String(id), usuario);
  }
}

