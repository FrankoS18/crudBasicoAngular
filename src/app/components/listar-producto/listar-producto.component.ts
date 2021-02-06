import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {

  listaProductos:Producto[] = [];

  constructor(
    private _productoService: ProductoService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerProductos(); 
  }

  obtenerProductos(){
    this._productoService.getProductos().subscribe(data => {
      console.log(data);
      this.listaProductos = data;
    }, error => {
      console.log(error);
    });
  }

  eliminarProducto(id:any){
    this._productoService.eliminarProducto(id).subscribe(data => {
      this.toastr.error('Producto eliminado correctamente', 'Producto Eliminado');
      this.obtenerProductos();
    }, error =>{
      console.log(error);
    })
  }


}
