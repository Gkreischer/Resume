import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  projects: any[] = [
    {
      name: 'Joylist',
      description: 'Aplicativo para compartilhamento de presentes, listas e eventos, conectando empresas e usuários. Também disponível no Google Play Store para Android.',
      technologies: 'Ionic (Angular), AWS, MariaDB, CloudPanel',
      url: 'https://joylist.com',
      image: 'assets/images/joylist.jpg'
    },
    {
      name: 'Atlas de Patologia Oral',
      description: 'Projeto desenvolvido para estudantes da faculdade Unilagos do curso de Odontologia, idealizado pela Laís dos Santos Castilho, para compartilhar conhecimentos desenvolvidos em projetos na faculdade.',
      technologies: 'Ionic (Angular), GitHub Pages',
      url: 'https://gkreischer.github.io/Atlas-Patologia-Oral/#/home',
      image: 'assets/images/unilagos.jpg'
    },
    {
      name: 'Site Sigatec Informática',
      description: 'Site desenvolvido para a empresa Sigatec Informática, com o objetivo de facilitar a comunicação e acesso aos serviços da loja.',
      technologies: 'React, GitHub Pages',
      url: 'https://gkreischer.github.io/sigatec-site/',
      image: 'assets/images/sigatec.jpg'
    },
    {
      name: 'AppMarket',
      description: 'Exemplo de um app em Ionic para uma loja de produtos consumindo API',
      technologies: 'Ionic (Angular), GitHub Pages',
      url: 'https://github.com/gkreischer/AppMarket',
      image: 'assets/images/ionic.png'
    },
    {
      name: 'Site MSK Informática',
      description: 'Site desenvolvido pela empresa MSK Informática, com o objetivo de facilitar a comunicação e acesso aos seus produtos e serviços.',
      technologies: 'Angular 17, GitHub Pages',
      url: 'http://gkreischer.github.io/SiteMSK',
      image: 'assets/images/msk.jpg'
    },
    {
      name: 'Site informativo Dra. Lais Castilho',
      description: 'Projeto desenvolvido para a Dra. Lais Castilho, para compartilhar informações de serviço, com a possibilidade de entrar em contato pelo Whatsapp. Esse projeto permite qualquer empreendimento ter um site simples e de fácil acesso para sua empresa. Focado em profissionais liberais.',
      technologies: 'Angular 17, GitHub Pages',
      url: 'https://gkreischer.github.io/SiteLais/#/home',
      image: 'assets/images/infosite.png'
    }
  ]
}
