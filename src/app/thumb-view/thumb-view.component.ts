import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {PaginationInstance} from 'ngx-pagination';

@Component({
  selector: 'app-thumb-view',
  templateUrl: './thumb-view.component.html',
  styleUrls: ['./thumb-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThumbViewComponent implements OnInit {
  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 6,
    currentPage: 1
  };
  public p: number = 1;
  public images: string [] = [
    'src\\assets\\images\\ZJ60B-Front.png',
    'src\\assets\\images\\Z1800-48B4U1.png',
    'src\\assets\\images\\Z1800-48B4U2.png',
    'src\\assets\\images\\Z1800-48B4U3.png',
    'src\\assets\\images\\ZJ60B-Front.png',
    'src\\assets\\images\\Z1800-48B4U1.png',
    'src\\assets\\images\\Z1800-48B4U2.png',
    'src\\assets\\images\\Z1800-48B4U3.png',
    'src\\assets\\images\\ZJ60B-Front.png',
    'src\\assets\\images\\Z1800-48B4U1.png',
    'src\\assets\\images\\Z1800-48B4U2.png',
    'src\\assets\\images\\Z1800-48B4U3.png',
    'src\\assets\\images\\ZJ60B-Front.png',
    'src\\assets\\images\\Z1800-48B4U1.png',
    'src\\assets\\images\\Z1800-48B4U2.png',
    'src\\assets\\images\\Z1800-48B4U3.png'
  ];

  constructor() { }

  ngOnInit() {
  }

}
