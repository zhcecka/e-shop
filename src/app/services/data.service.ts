import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Category {
  id: string;
  name: string;
}

export interface Good {
  sku: number;
  name: string;
  type: string;
  price: number;
  upc: string;
  category: Category[];
  shipping: number;
  description: string;
  manufacturer: string;
  model: string;
  url: string;
  image: string;
}

const GET_ITEMS = 'api/data.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public goods;

  constructor(private http: HttpClient) { }

  public getGoods(): Observable<Good[]> {
    return this.http.get<Good[]>(GET_ITEMS);
  }

  public getGoodBySku(sku: number): Observable<Good> {
    return this.getGoods().pipe(
      map((goods: Good[]) => goods.find((good: Good) => good.sku === sku))
    );
  }

  public searchGoodByName(searchString: string): Observable<Good[]> {
    return this.getGoods().pipe(
      map((goods: Good[]) => goods.filter((good: Good) => good.name.includes(searchString)))
    );
  }
}
