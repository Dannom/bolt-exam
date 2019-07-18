import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

import { AppComponent } from './app.component';
import { ListViewComponent } from './list-view/list-view.component';
import { ThumbViewComponent } from './thumb-view/thumb-view.component';
import { ListViewItemComponent } from './list-view/list-view-item/list-view-item.component';
import { ThumbViewItemComponent } from './thumb-view/thumb-view-item/thumb-view-item.component';
import { LearnMoreComponent } from './learn-more/learn-more.component';

const routes: Routes = [
  {
    path: 'list-view',
    component: ListViewComponent
  },
  {
    path: 'thumb-view',
    component: ThumbViewComponent
  },
  {
    path: 'learn-more',
    component: LearnMoreComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
    ThumbViewComponent,
    ListViewItemComponent,
    ThumbViewItemComponent,
    LearnMoreComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
