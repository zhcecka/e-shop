import { Component, Input } from '@angular/core';
import { Good } from '../services/data.service';

@Component({
  selector: 'app-good',
  templateUrl: './good.component.html',
  styleUrls: ['./good.component.scss'],
})
export class GoodComponent {
  @Input() good: Good;

}
