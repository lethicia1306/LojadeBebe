import { Component } from '@angular/core';

@Component({
  selector: 'app-vitrine',
  templateUrl: './vitrine.component.html',
  styleUrls: ['./vitrine.component.css']
})
export class VitrineComponent {

  produtos = [
    {
      id: 1,
      nome: 'Macacão Florzinha',
      descricao: 'Macacão florido para bebê com detalhes delicados.',
      preco: 89.90,
      imagem: 'assets/images/florzinha.jpeg'
    },
    {
      id: 2,
      nome: 'Macacão Verde',
      descricao: 'Macacão verde confortável para bebês.',
      preco: 49.90,
      imagem: 'assets/images/macacão_verde.jpeg'
    },
    {
      id: 3,
      nome: 'Conjunto de Coração',
      descricao: 'Conjunto infantil com estampa de coração.',
      preco: 119.90,
      imagem: 'assets/images/vesti_coracao.jpeg'
    },
    {
      id: 4,
      nome: 'Vestido de Raposa',
      descricao: 'Vestido infantil com estampa de raposa.',
      preco: 119.90,
      imagem: 'assets/images/vesti_raposa.jpeg'
    }
  ];
}