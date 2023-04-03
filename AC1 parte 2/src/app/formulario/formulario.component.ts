import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  imcForm: FormGroup;
  imcResult: number;
  imcClassification: string;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.imcForm = this.fb.group({
      weight: ['', [Validators.required, Validators.min(1), Validators.max(500)]],
      height: ['', [Validators.required, Validators.min(0.01), Validators.max(3)]],
    });
  }

  calculateIMC() {
    const weight = this.imcForm.get('weight').value;
    const height = this.imcForm.get('height').value;
    this.imcResult = weight / (height * height);

    if (this.imcResult < 18.5) {
      this.imcClassification = 'Abaixo do peso normal';
    } else if (this.imcResult < 25) {
      this.imcClassification = 'Peso normal';
    } else if (this.imcResult < 30) {
      this.imcClassification = 'Excesso de peso';
    } else if (this.imcResult < 35) {
      this.imcClassification = 'Obesidade classe 1';
    } else if (this.imcResult < 40) {
      this.imcClassification = 'Obesidade classe 2';
    } else {
      this.imcClassification = 'Obesidade classe 3';
    }
  }
}
