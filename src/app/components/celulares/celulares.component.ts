import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icelular } from '../../models/celular.models';
import { ApiService } from '../../services/api.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-celulares',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './celulares.component.html',
  styleUrl: './celulares.component.css',
})
export class CelularesComponent implements OnInit {
  listadoCelulares: Icelular[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getCelulares().subscribe((datos: Icelular[]) => {
      this.listadoCelulares = datos;
    });
  }

  modificarCelular(celular: Icelular): void {
    this.apiService.putCelular(celular).subscribe(() => {
      this.apiService.getCelulares().subscribe((datos: Icelular[]) => {
        this.listadoCelulares = datos;
      });
    });
  }

  eliminarCelular(id: number): void {
    this.apiService.deleteCelular(id).subscribe(() => {
      this.apiService.getCelulares().subscribe((datos: Icelular[]) => {
        this.listadoCelulares = datos;
      });
    });
  }
}
