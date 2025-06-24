import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Icelular } from '../../models/celular.models';
import { ApiService } from '../../service/api.service';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-modificar',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './modificar.component.html',
  styleUrl: './modificar.component.css',
})
export class ModificarComponent {
  // creamos el FormGroup
  miFormulario: FormGroup;
  id!: string;
  celular?: Icelular;

  constructor(
    private formulario: FormBuilder,
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {
    this.miFormulario = this.formulario.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      modelo: ['', Validators.required],
      gb: ['', Validators.required],
      color: ['', Validators.required],
      precio: ['', Validators.required],
      imagen1: ['', Validators.required],
      imagen2: ['', Validators.required],
      imagen3: ['', Validators.required],
      imagen4: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.apiService.getCelularbyId(Number(this.id)).subscribe({
      next: (data: Icelular) => {
        this.celular = data;
        this.miFormulario.setValue({
          id: this.celular.id,
          nombre: this.celular.nombre,
          modelo: this.celular.modelo,
          gb: this.celular.gb,
          color: this.celular.color,
          precio: this.celular.precio,
          imagen1: this.celular.imagen1,
          imagen2: this.celular.imagen2,
          imagen3: this.celular.imagen3,
          imagen4: this.celular.imagen4,
        });
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  modificar() {
    if (this.miFormulario.valid) {
      this.celular = {
        id: this.miFormulario.value.id,
        nombre: this.miFormulario.value.nombre,
        modelo: this.miFormulario.value.modelo,
        gb: this.miFormulario.value.gb,
        color: this.miFormulario.value.color,
        precio: this.miFormulario.value.precio,
        imagen1: this.miFormulario.value.imagen1,
        imagen2: this.miFormulario.value.imagen2,
        imagen3: this.miFormulario.value.imagen3,
        imagen4: this.miFormulario.value.imagen4,
      };
      console.log(this.celular);

      const celular = this.convertirCelular(this.celular);

      this.apiService.putCelular(celular).subscribe({
        next: (res) => {
          console.log('Celular modificado correctamente', res);
        },
        error: (error) => {
          console.error('Error al modificar el celular', error);
        },
      });
    } else {
      console.error('Formulario invalido', this.miFormulario.errors);
    }
  }

  convertirCelular = (celular: Icelular): any => {
    return {
      id: celular.id,
      nombre: celular.nombre,
      modelo: celular.modelo,
      gb: celular.gb,
      color: celular.color,
      precio: celular.precio,
      imagen1: celular.imagen1,
      imagen2: celular.imagen2,
      imagen3: celular.imagen3,
      imagen4: celular.imagen4,
    };
  };

  limpiar() {
    this.miFormulario.reset();
  }

  editar() {
    if (this.miFormulario.valid) {
      this.celular = {
        id: this.miFormulario.value.id,
        nombre: this.miFormulario.value.nombre,
        modelo: this.miFormulario.value.modelo,
        gb: this.miFormulario.value.gb,
        color: this.miFormulario.value.color,
        precio: this.miFormulario.value.precio,
        imagen1: this.miFormulario.value.imagen1,
        imagen2: this.miFormulario.value.imagen2,
        imagen3: this.miFormulario.value.imagen3,
        imagen4: this.miFormulario.value.imagen4,
      };
      console.log(this.celular);

      const celular = this.convertirCelular(this.celular);

      this.apiService.putCelular(celular).subscribe({
        next: (res) => {
          console.log('Celular modificado correctamente', res);
        },
        error: (error) => {
          console.error('Error al modificar el celular', error);
        },
      });
    } else {
      console.error('Formulario invalido', this.miFormulario.errors);
    }
  }
}
