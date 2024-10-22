import { Component } from '@angular/core';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent {
  visible: boolean = false;

  toggleMenu() {
    this.visible = !this.visible;
  }
}
