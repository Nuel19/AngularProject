import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabSectionComponent } from './tab-section.component';

describe('TabSectionComponent', () => {
  let component: TabSectionComponent;
  let fixture: ComponentFixture<TabSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabSectionComponent]
    });
    fixture = TestBed.createComponent(TabSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
