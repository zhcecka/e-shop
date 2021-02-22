import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, Good } from '../services/data.service';

@Component({
  selector: 'app-view-good',
  templateUrl: './view-good.page.html',
  styleUrls: ['./view-good.page.scss'],
})
export class ViewGoodPage implements OnInit {
  public good: Good;
  public amount: number;
  public quantity: number;

  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const sku = this.activatedRoute.snapshot.paramMap.get('sku');
    this.data.getGoodBySku(parseInt(sku, 10)).subscribe(i => this.good = i);
  }

  public inputQuantity() {
    this.amount = this.quantity * this.good.price;
  }

  public inputAmount() {
    this.quantity = this.amount / this.good.price;
  }

  public setAmount(amount: number) {
    this.amount = amount;
  }

  public setQuantity(quantity: number) {
    this.quantity = quantity;
  }
}
