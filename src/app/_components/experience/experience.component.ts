import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  showElement: boolean = false;

  ngOnInit(): void {
    this.getListItemClicked();
  }

  getListItemClicked() {

    document.querySelectorAll('.steplist').forEach((steplist: Element) => {

      steplist.querySelector('li')?.classList.add('active');

      steplist.addEventListener('click', (event: Event) => {
        const target = event?.target as Element;
        console.log(target)
        if (!(target instanceof HTMLLIElement)) return;
        const items = target.closest('.steplist')?.querySelectorAll('li');
        if (!items) return;
        items.forEach((item: Element) => {
          if (item === target) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });
      });
    });

  }

}
