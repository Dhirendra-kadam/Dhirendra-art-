import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventbindingComponent } from './eventbinding.component';

describe('EventbindingComponent', () => {
  let component: EventbindingComponent;
  let fixture: ComponentFixture<EventbindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventbindingComponent]
    });
    fixture = TestBed.createComponent(EventbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
