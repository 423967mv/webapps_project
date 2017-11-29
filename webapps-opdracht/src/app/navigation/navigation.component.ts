import { Photo1100dComponent } from '../photo1100d/photo1100d.component';
import { ImageService } from '../image.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  constructor(private service: ImageService) {
    this.title1 = 'All Pictures';
    this.title2 = 'Canon 1100D';
    this.title3 = 'Canon 1000D';
    this.title4 = 'Nikon D70s';
  }

  ngOnInit() {
  }

  onMenuItemClicked(gallery: string) {
    this.menuItemClicked.emit(gallery);
  }

}
