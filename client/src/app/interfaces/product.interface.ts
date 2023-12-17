export interface Producto {
    id_producto: string;
    nombre: string;
    descripcion: string;
    stock: number;
    fotourl: string;
    categoria: Categoria;
    facturaCompraProductos: FacturaCompraProducto[];
  }
  
  export interface Categoria {
    id_categoria: number;
    nombre: string;
  }
  
  export interface FacturaCompraProducto {
    id_factura_producto: number;
    precio_venta: number;
  }
  