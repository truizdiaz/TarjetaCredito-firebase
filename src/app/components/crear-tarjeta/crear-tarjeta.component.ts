import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-tarjeta',
  templateUrl: './crear-tarjeta.component.html',
  styleUrls: ['./crear-tarjeta.component.css']
})
export class CrearTarjetaComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      titular: ['', Validators.required],
      numeroTarjeta: ['', Validators.required],
      fechaExpiracion: ['', Validators.required],
      cvv: ['', Validators.required],
    })
   }

  ngOnInit(): void {
  }

  crearTarjeta() {
    console.log(this.form);
  }

}
