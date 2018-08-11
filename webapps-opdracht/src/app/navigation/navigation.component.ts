import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Output()
  menuItemClicked: EventEmitter<string> = new EventEmitter<string>();

  private visibleImages: any[];
  private title1: string;
  private title2: string;
  private title3: string;
  private title4: string;
  private activeGallery = 'all';

  constructor() {
    this.title1 = 'All Pictures';
    this.title2 = 'Canon 1100D';
    this.title3 = 'Canon 1000D';
    this.title4 = 'Nikon D70s';
  }

  ngOnInit() {
  }

  onMenuItemClicked(gallery: string) {
    this.menuItemClicked.emit(gallery);

    // Change background color of previous menu item back to normal
    const previousElement = document.getElementById(this.activeGallery);
    previousElement.classList.remove('active');

    // Change background color of the clicked menu item to active
    this.activeGallery = gallery;
    const element = document.getElementById(gallery);
    element.classList.add('active');
  }

}
