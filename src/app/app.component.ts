import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RlsLibrary';

  exampleInput = [
    {
      id: 0,
      text: 'deneme 1',
      icon: 'view_list',
      isViewText: false
    },
    {
      id: 1,
      text: 'deneme 2',
      icon: 'list',
      isViewText: false
    },
    {
      id: 2,
      text: 'deneme 3',
      icon: 'list',
      isViewText: true
    },
    {
      id: 3,
      text: 'deneme 4',
      icon: 'list',
      isViewText: true
    }
  ];
  selectedVal = 1;

  switchTheme() {
    document.body.classList.toggle('dark');
  }

  changeToggle($event: number) {
    console.log($event);
  }
}
