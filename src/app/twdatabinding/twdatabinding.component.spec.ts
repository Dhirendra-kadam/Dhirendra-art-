import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwdatabindingComponent } from './twdatabinding.component';

describe('TwdatabindingComponent', () => {
  let component: TwdatabindingComponent;
  let fixture: ComponentFixture<TwdatabindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwdatabindingComponent]
    });
    fixture = TestBed.createComponent(TwdatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
