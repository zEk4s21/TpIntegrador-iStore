import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Icelular } from '../../models/celular.models';
import { ApiService } from '../../service/api.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css',
})
export class DetallesComponent implements OnInit {
  celular?: Icelular;
  cargando: boolean = true;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        this.apiService.getCelularbyId(Number(params['id'])).subscribe({
          next: (data: Icelular) => {
            this.celular = data;
            this.cargando = false;
          },
          error: (error: any) => {
            console.log(error);
            this.cargando = false;
          },
        });
      },
      error: (error: any) => {
        console.log(error);
        this.cargando = false;
      },
    });
  }
}
