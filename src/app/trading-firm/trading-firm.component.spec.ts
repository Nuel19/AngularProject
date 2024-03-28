import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingFirmComponent } from './trading-firm.component';

describe('TradingFirmComponent', () => {
  let component: TradingFirmComponent;
  let fixture: ComponentFixture<TradingFirmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TradingFirmComponent]
    });
    fixture = TestBed.createComponent(TradingFirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
