import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  public nombre: string = '';
  public precio: string = '';
  public descripcion: string = '';
  public imagen: string = '';

  constructor() { }

  ngOnInit(

  ) {
  }

}
