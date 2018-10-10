import { Component, OnInit } from '@angular/core';
import { ProductosList } from '../MockStock';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  productos = ProductosList;
  constructor() { }

  ngOnInit() {
  }

}
