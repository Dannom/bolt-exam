import {Component, Input, OnInit} from '@angular/core';
import {SelectedItemService} from '../../selected-item.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-thumb-view-item',
  templateUrl: './thumb-view-item.component.html',
  styleUrls: ['./thumb-view-item.component.scss']
})
export class ThumbViewItemComponent implements OnInit {
  @Input() image: string;

  constructor(private selectedItemService: SelectedItemService,
              private router: Router) { }

  ngOnInit() {
  }

  public onLearnMoreClick(): void {
    this.selectedItemService.selectedItem = this.image;
    this.router.navigate(['learn-more']);
  }

}
