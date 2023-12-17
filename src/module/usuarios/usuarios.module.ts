// api/src/usuarios/usuario.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuarios.entity';
import { UsuarioController } from './usuarios.controller';
import { UsuarioService } from './usuarios.service';
import { Rol } from '../roles/rol.entity';

// usuario.module.ts
@Module({
  imports: [TypeOrmModule.forFeature([Usuario, Rol])],
  controllers: [UsuarioController],
  providers: [UsuarioService],
})
export class UsuarioModule {}
