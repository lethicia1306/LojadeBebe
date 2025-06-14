import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface ItemCesta {
  id: number;
  nome: string;
  preco: number;
  imagem: string;
  quantidade: number;
  tamanho?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CestaService {
  private itensSubject = new BehaviorSubject<ItemCesta[]>([]);
  itens$ = this.itensSubject.asObservable();

  adicionarItem(item: ItemCesta) {
    const itensAtuais = this.itensSubject.value;
    const itemExistente = itensAtuais.find(i => i.id === item.id);
    
    if (itemExistente) {
      itemExistente.quantidade += item.quantidade;
    } else {
      itensAtuais.push({...item});
    }
    
    this.itensSubject.next([...itensAtuais]);
  }

  removerItem(index: number) {
    const itensAtuais = this.itensSubject.value;
    itensAtuais.splice(index, 1);
    this.itensSubject.next([...itensAtuais]);
  }

  atualizarQuantidade(index: number, quantidade: number) {
    const itensAtuais = this.itensSubject.value;
    if (itensAtuais[index]) {
      itensAtuais[index].quantidade = quantidade;
      this.itensSubject.next([...itensAtuais]);
    }
  }

  limparCesta() {
    this.itensSubject.next([]);
  }

  get total() {
    return this.itensSubject.value.reduce((sum, item) => sum + (item.preco * item.quantidade), 0);
  }

  get quantidadeItens() {
    return this.itensSubject.value.reduce((sum, item) => sum + item.quantidade, 0);
  }
}