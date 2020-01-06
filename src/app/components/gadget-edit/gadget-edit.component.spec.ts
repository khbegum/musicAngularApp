import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GadgetEditComponent } from './gadget-edit.component';

describe('GadgetEditComponent', () => {
  let component: GadgetEditComponent;
  let fixture: ComponentFixture<GadgetEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GadgetEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GadgetEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
