import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-sticky-navbar',
  templateUrl: './sticky-navbar.component.html',
  styleUrls: ['./sticky-navbar.component.scss']
})
export class StickyNavbarComponent {
  navbarWidth = 0;
  @HostListener('window:scroll', [])
  onScroll(): void {
    const windowHeight = window.innerHeight;
    const bodyHeight = document.body.clientHeight;
    const scrollY = window.scrollY;

    const maxScroll = bodyHeight - windowHeight;
    const scrolledPercentage = (scrollY / maxScroll) * 100;

    this.navbarWidth = Math.min(scrolledPercentage, 100);
  }
}
