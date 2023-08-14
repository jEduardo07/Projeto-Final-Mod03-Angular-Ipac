import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  standalone: true,
  imports: [MatGridListModule, MatCardModule, MatIconModule, CommonModule ],
})
export class ProductComponent {

  constructor(private router: Router) { }

  verDetalhes(imovelId: string) {
    this.router.navigate(['/', imovelId]);
  }

  toggleFavorito(index: number): void {
    this.produtos[index].favorito = !this.produtos[index].favorito;
  }


  data: any = new Date();
  produtos: Array<any> = [
    {
      id: '84yf48jhfr784yh8h4',
      titulo: 'Iphone 14',
      foto: 'https://i.ibb.co/L85LJVP/Iphone14-Pro-Max.jpg',
      memoria: '168 GB',
      ram: '6 GB',
      sistema: 'iOS 15',
      preco: 10000,
      favorito: false
    },
    {
      id: 'hf83yf8484uf84uf',
      titulo: 'Iphone 13',
      foto: 'https://i.ibb.co/KFym5TW/iphone13.jpg',
      memoria: '168 GB',
      ram: '4 GB',
      sistema: 'iOS 15',
      preco: 8000,
      favorito: false
    },
    {
      id: 'irjfirfhrfmklfmr3',
      titulo: 'Mecbook Air13',
      foto: 'https://i.ibb.co/BzqGBhP/macbook-Air13.jpg',
      memoria: '256 GB',
      ram: '16 GB',
      sistema: 'macOS',
      preco: 15000,
      favorito: false
    },
    {
      id: '4jgijtghitjijgitj',
      titulo: 'MecBook Pro 16',
      foto: 'https://i.ibb.co/Xjv67bf/mac-pro-16.jpg',
      memoria: '512 GB',
      ram: '32 GB',
      sistema: 'macOS' ,
      preco: 40000,
      favorito: false
    },
    {
      id: "rg93h8eirbgrebngn",
      titulo: 'Ipad air 5',
      foto: 'https://i.ibb.co/dQwzTCz/Ipad-air-5.jpg',
      memoria: '256 GB',
      ram: '8 GB',
      sistema: 'IPadOs',
      preco: 5449,
      favorito: false
    },
    {
      id: "8493ty34hg489gh",
      titulo: 'Ipad Pro',
      foto: 'https://i.ibb.co/tcr1D3g/ipadpro.jpg',
      memoria: '256 GB',
      ram: '8 GB',
      sistema: 'IPadOs',
      preco: 9799,
      favorito: false
    }
  ];
}