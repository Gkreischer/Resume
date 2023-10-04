import { Component, AfterViewInit } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'gkresume';

  ngAfterViewInit() {
    // Ative o Scroll Spy após o carregamento da página
    this.activateScrollSpy();
  }

  activateScrollSpy() {
    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
      target: '#navbar', // O ID do elemento de navegação
    });
  }
}
