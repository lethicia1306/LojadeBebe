import { Component } from '@angular/core';
import { CestaService } from '../shared/cesta.service';

@Component({
  selector: 'app-cesta',
  templateUrl: './cesta.html',
  styleUrls: ['./cesta.css']
})
export class CestaComponent {
  constructor(public cestaService: CestaService) {}

  aumentarQuantidade(item: any, index: number) {
    this.cestaService.atualizarQuantidade(index, item.quantidade + 1);
  }

  diminuirQuantidade(item: any, index: number) {
    if (item.quantidade > 1) {
      this.cestaService.atualizarQuantidade(index, item.quantidade - 1);
    }
  }

  finalizarCompra() {
    alert('Compra finalizada com sucesso! Obrigado por encher sua cestinha!');
    this.cestaService.limparCesta();
  }
}