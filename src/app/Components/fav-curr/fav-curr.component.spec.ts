import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavCurrComponent } from './fav-curr.component';

describe('FavCurrComponent', () => {
  let component: FavCurrComponent;
  let fixture: ComponentFixture<FavCurrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavCurrComponent]
    });
    fixture = TestBed.createComponent(FavCurrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
