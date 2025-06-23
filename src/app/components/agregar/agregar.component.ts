import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { Icelular } from '../../models/celular.models';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],  
  providers: [ApiService],

templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css',
})
export class AgregarComponent {
  // creamos el FormGroup
  miFormulario: FormGroup;

  celular?: Icelular;

  constructor(private formulario: FormBuilder, private apiService: ApiService) {
    this.miFormulario = this.formulario.group({
      id: 0,
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

  enviar() {
    if (this.miFormulario.valid) {
      this.celular = {
        id: 0,
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

      const celu = this.convertirCelular(this.celular);

      this.apiService.postCelular(celu).subscribe({
        next: (res) => {
          console.log('Celular agregado correctamente', res);
        },
        error: (error) => {
          console.error('Error al agregar el celular', error);
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
}
