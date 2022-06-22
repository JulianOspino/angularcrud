import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/Service/datos.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  lista:any=[];
  constructor(private datoService:DatosService) { }

  ngOnInit(): void {
    this.listarDatos();
  }

  listarDatos(){
    this.datoService.getDatos().subscribe(
      res=>{this.lista=res;},
      err=>{console.log(err);}
    )
  }

  eliminarDato(id:number){
    this.datoService.borrarDato(id).subscribe(
      res=>{this.ngOnInit();},
      err=>{console.log(err);}
    );
  }
}
