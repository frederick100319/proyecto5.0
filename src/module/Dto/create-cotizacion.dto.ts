// cotizacion/dto/create-cotizacion.dto.ts
import { IsNotEmpty, IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreateCotizacionDto {
  @IsOptional()
  @IsNumber()
  id_cotizacion?: number;


  @IsNotEmpty()
  @IsString()
  descripcion: string;

}


