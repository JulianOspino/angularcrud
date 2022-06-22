import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Datos, DatosService } from 'src/app/Service/datos.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  id:number=0
  datoActual: Datos={id:0,documento:'',edad:0,peso:0,altura:0,genero:'Masculino', imc:0}
  constructor(private datoService:DatosService, private activateRouter:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id=this.activateRouter.snapshot.params['id'];
    this.datoService.getUnDato(this.id).subscribe(
      res=>{this.datoActual=res;},
      err=>{console.log(err);}
    );
  }

  guardarDato(){
    this.datoService.editarDato(this.id, this.datoActual).subscribe(
      res=>{this.router.navigate(['/listar']);},
      err=>{console.log(err);}
    );
  }

}
