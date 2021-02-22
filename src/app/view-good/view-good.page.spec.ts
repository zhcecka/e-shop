import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ViewGoodPageRoutingModule } from './view-good-routing.module';

import { ViewGoodPage } from './view-good.page';

describe('ViewGoodPage', () => {
  let component: ViewGoodPage;
  let fixture: ComponentFixture<ViewGoodPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewGoodPage ],
      imports: [IonicModule.forRoot(), ViewGoodPageRoutingModule, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewGoodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
