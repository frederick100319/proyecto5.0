
import { Controller, Get, Param } from '@nestjs/common';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Get(':nombre')
  async findOne(@Param('nombre') nombre: string) {
    return this.rolesService.findOne(nombre);
  }
}
