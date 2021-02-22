import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService, Good } from '../services/data.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public goods: Observable<Good[]>;
  public searchString: string;

  constructor(private dataService: DataService, private storage: Storage) {
    storage.get('name').then((searchString: string) => {
      this.searchString = searchString;
    });
    this.goods = this.dataService.getGoods();
  }

  public search(event: CustomEvent) {
    const searchString = event.detail.value;
    this.storage.set('name', searchString);
    this.goods = this.dataService.searchGoodByName(searchString);
  }
}
