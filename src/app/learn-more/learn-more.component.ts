import {Component, OnInit} from '@angular/core';
import {SelectedItemService} from '../selected-item.service';

@Component({
  selector: 'app-learn-more',
  templateUrl: './learn-more.component.html',
  styleUrls: ['./learn-more.component.scss']
})
export class LearnMoreComponent implements OnInit {
  public images: string[] = [
    'src\\assets\\images\\ZJ60B-Front.png',
    'src\\assets\\images\\Z1800-48B4U1.png',
    'src\\assets\\images\\Z1800-48B4U2.png',
    'src\\assets\\images\\Z1800-48B4U3.png'
  ];
  public selectedImage: string;

  constructor(private selectedItemService: SelectedItemService) {
  }

  ngOnInit() {
    this.selectedImage = this.selectedItemService.selectedItem ? this.selectedItemService.selectedItem : this.images[0];
  }

  public onImageClick(image: string): void {
    this.selectedImage = image;
  }

}
