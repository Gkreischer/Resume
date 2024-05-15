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
      description: 'Aplicativo para compartilhamento de presentes, listas e eventos, conectando empresas e usuários, disponível no Google Play Store para Android.',
      technologies: 'Ionic (Angular), AWS, MariaDB, CloudPanel',
      url: 'https://joylist.com',
      image: 'assets/images/joylist_logo.png'
    },
    {
      name: 'Atlas de Patologia Oral',
      description: 'Projeto desenvolvido para estudantes da faculdade Unilagos do curso de Odontologia, iniciado pela Laís dos Santos Castilho, para compartilhar conhecimentos desenvolvidos em projetos na faculdade.',
      technologies: 'Ionic (Angular), GitHub Pages',
      url: 'https://gkreischer.github.io/Atlas-Patologia-Oral/#/home',
      image: 'assets/images/unilagos_logo.jpg'
    },
    {
      name: 'Site Sigatec Informática',
      description: 'Site desenvolvido para a empresa Sigatec Informática, para compartilhar conhecimentos desenvolvidos em projetos na faculdade.',
      technologies: 'React, GitHub Pages',
      url: 'https://gkreischer.github.io/sigatec-site/',
      image: 'assets/images/logo_sigatec.jpg'
    },
    {
      name: 'AppMarket',
      description: 'Exemplo de um app em Ionic para uma loja de produtos consumindo API',
      technologies: 'Ionic (Angular), GitHub Pages',
      url: 'https://github.com/gkreischer/AppMarket',
      image: 'assets/images/logo_ionic.png'
    },
  ]
}
