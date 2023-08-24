import { Component, OnInit } from '@angular/core';
import { GetanimalsService } from 'src/app/services/getanimals.service';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})

export class ListadoComponent implements OnInit{
  datos: any[] = []; // Variable para almacenar los datos de la API

  constructor(private apiService: GetanimalsService) { }

  ngOnInit() {
    this.apiService.getDatos().subscribe(data => {
      this.datos = data;
      console.log("Datos ->", data);
    });
  }
}