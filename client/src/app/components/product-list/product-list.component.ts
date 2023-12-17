// product-list.component.ts

import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service'; // Ajusta la ruta según tu estructura de carpetas
import { Producto } from '../../interfaces/product.interface'; // Ajusta la ruta según tu estructura de carpetas

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productos: Producto[] = [];
  loading = true;

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.productoService.getAllProducts().subscribe(
      (data) => {
        this.productos = data;
        this.loading = false; // Indica que los datos se han cargado correctamente
      },
      (error) => {
        console.error('Error al obtener productos:', error);
        this.loading = false; // Indica que ha ocurrido un error al obtener los datos
      }
    );
  }
}
