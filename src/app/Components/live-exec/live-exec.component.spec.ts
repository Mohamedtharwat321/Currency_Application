import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveExecComponent } from './live-exec.component';

describe('LiveExecComponent', () => {
  let component: LiveExecComponent;
  let fixture: ComponentFixture<LiveExecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiveExecComponent]
    });
    fixture = TestBed.createComponent(LiveExecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
