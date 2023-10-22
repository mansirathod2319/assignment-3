import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayComboComponent } from './display-combo.component';

describe('DisplayComboComponent', () => {
  let component: DisplayComboComponent;
  let fixture: ComponentFixture<DisplayComboComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayComboComponent]
    });
    fixture = TestBed.createComponent(DisplayComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
