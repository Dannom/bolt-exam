import { Component, OnInit } from '@angular/core';
import {SelectedItemService} from '../../selected-item.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-view-item',
  templateUrl: './list-view-item.component.html',
  styleUrls: ['./list-view-item.component.scss']
})
export class ListViewItemComponent implements OnInit {
  images: string [] = [
    'src\\assets\\images\\ZJ60B-Front.png',
    'src\\assets\\images\\Z1800-48B4U1.png',
    'src\\assets\\images\\Z1800-48B4U2.png',
    'src\\assets\\images\\Z1800-48B4U3.png'
  ];

  selectedImage: string = this.images[0];

  constructor(private selectedItemService: SelectedItemService,
              private router: Router) { }

  ngOnInit() {
  }

  public onImageClick(image: string): void {
    this.selectedImage = image;
  }

  public onLearnMoreClick(): void {
    this.selectedItemService.selectedItem = this.selectedImage;
    this.router.navigate(['learn-more']);
  }

}
