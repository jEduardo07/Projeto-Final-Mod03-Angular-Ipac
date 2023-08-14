import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

    title: string = 'IPac';
    copyright: string = 'Desenvolvido em 2023 ';
    developer: string = 'IPac dev';

    redesSociais: Array<any> = [
      {
        nome: 'Facebook',
        link: 'http://www.facebook.com',
        icone: 'https://i.ibb.co/LZYBg8Q/logotipo-circular-do-facebook.png'
      },
      {
        nome: 'Instagram',
        link: 'http://www.instagram.com',
        icone: 'https://i.ibb.co/0nNbcgS/instagram-1.png'
      },
      {
        nome: 'LinkedIn',
        link: 'http://www.linkedin.com',
        icone: 'https://i.ibb.co/12YfRcr/linkedin.png'
      }
    ]
}


