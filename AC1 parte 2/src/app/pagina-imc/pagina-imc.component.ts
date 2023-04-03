import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-imc',
  templateUrl: './pagina-imc.component.html',
  styleUrls: ['./pagina-imc.component.css']
})
export class PaginaIMCComponent {

  constructor(private router: Router) { }

  showImcForm() {
    this.router.navigate(['/formulario-imc']);
  }
 }
