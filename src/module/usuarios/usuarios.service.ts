// usuarios.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
import { Usuario } from './usuarios.entity';
import { CreateUsuario } from '../Dto/create-usuario.dto';
import { Rol } from '../roles/rol.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}


async create(usuario: CreateUsuario): Promise<CreateUsuario> {
  const nuevoUsuario = this.usuarioRepository.create(usuario);

  nuevoUsuario.fk_id_rol = usuario.fk_id_rol;

  return this.usuarioRepository.save(nuevoUsuario);
}



  async findOne(usuario: string): Promise<Usuario | undefined> {
    return this.usuarioRepository.findOne({ where: { usuario } });
  }

  async findOneWithRoleId(id: string): Promise<Usuario | undefined> {
    const usuario = await this.usuarioRepository
      .createQueryBuilder('usuario')
      .leftJoinAndSelect('usuario.fk_id_rol', 'rol')
      .where('usuario.usuario = :id', { id })
      .getOne();
  
    if (!usuario) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }
  
    return usuario;
  }

  async update(usuario: string, usuarioData: Partial<Usuario>): Promise<Usuario> {
    const usuarioExistente = await this.findOne(usuario);
    if (!usuarioExistente) {
      throw new NotFoundException('Usuario no encontrado');
    }

    this.usuarioRepository.merge(usuarioExistente, usuarioData);
    return this.usuarioRepository.save(usuarioExistente);
  }

}

