import { Component } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss'],
})
export class ToolsComponent {
  tools: Array<any> = [
    {
      name: 'Angular',
      link: 'https://angular.io/',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png',
    },
    {
      name: 'Ionic',
      link: 'https://ionicframework.com/',
      src: '/assets/images/ionic.png',
    },
    {
      name: 'PHP',
      link: 'https://www.php.net/',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0PW09KUfV8UvLmZZo_DefEgAYaAmoqevVjRYwsPxXQOLeG8kTYxLvXcKZS-9tL0yTU0&usqp=CAU',
    },
    {
      name: 'Amazon AWS',
      link: 'https://aws.amazon.com/pt/',
      src: 'https://cdn.icon-icons.com/icons2/2389/PNG/512/amazon_aws_logo_icon_145507.png',
    },
    {
      name: 'Linux',
      link: 'https://pt.wikipedia.org/wiki/Linux',
      src: 'https://brasilcloud.com.br/wp-content/uploads/2018/09/logo-linux.png',
    },
    {
      name: 'Laravel',
      link: 'https://laravel.com/',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png',
    },
    {
      name: 'Wordpress',
      link: 'https://br.wordpress.org/',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/1200px-WordPress_blue_logo.svg.png',
    },
    {
      name: 'Cloudpanel',
      link: 'https://www.cloudpanel.io/',
      src: 'https://avatars.githubusercontent.com/u/53903112?v=4',
    },
    {
      name: 'React',
      link: 'https://react.dev/',
      src: 'data:image/png;base64,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',
    },
    {
      name: 'Azure',
      link: 'https://azure.microsoft.com/pt-br/',
      src: 'https://swimburger.net/media/0zcpmk1b/azure.jpg'
    },
    {
      name: 'Javascript',
      link: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
      src: 'data:image/png;base64,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'
    },
    {
      name: 'HTML5',
      link: 'https://pt.wikipedia.org/wiki/HTML5',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png'
    },
    {
      name: 'CSS3',
      link: 'https://pt.wikipedia.org/wiki/CSS3',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png'
    },
    {
      name: 'Next.js',
      src: 'https://cdn.worldvectorlogo.com/logos/next-js.svg'
    },
    {
      name: 'SQL',
      src: 'https://www.svgrepo.com/show/331760/sql-database-generic.svg'
    },
  ];
}
