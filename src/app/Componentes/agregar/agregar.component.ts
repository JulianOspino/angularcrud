import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Datos, DatosService } from 'src/app/Service/datos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  nuevoDato: Datos={id:0,documento:'',edad:0,peso:0,altura:0,genero:'Masculino', imc:0}
  constructor(private datoService:DatosService, private router:Router) { }

  ngOnInit(): void {
  }

  agregarDato(){
    this.datoService.guardarDato(this.nuevoDato).subscribe(
      res=>{console.log(res);this.router.navigate(['/listar'])},
      err=>{console.log(err);
      }

    )
  }

}
