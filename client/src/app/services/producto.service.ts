import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/product.interface';  // Reemplaza 'ruta-del-producto-entity' con la ruta correcta

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private apiUrl = 'http://localhost:3000/productos';  // Reemplaza con la URL de tu backend

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Producto[]> {
    const url = `${this.apiUrl}/ruta-api-para-obtener-productos`;  // Reemplaza con la ruta correcta
    return this.http.get<Producto[]>(url);
  }
}
