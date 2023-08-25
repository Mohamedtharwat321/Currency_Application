import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertCardComponent } from './convert-card.component';

describe('ConvertCardComponent', () => {
  let component: ConvertCardComponent;
  let fixture: ComponentFixture<ConvertCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConvertCardComponent]
    });
    fixture = TestBed.createComponent(ConvertCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
