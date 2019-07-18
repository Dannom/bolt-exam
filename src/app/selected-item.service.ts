import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectedItemService {
  selectedItem: string = ''

  constructor() { }
}
