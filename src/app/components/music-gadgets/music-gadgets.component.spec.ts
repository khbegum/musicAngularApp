import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicGadgetsComponent } from './music-gadgets.component';

describe('MusicGadgetsComponent', () => {
  let component: MusicGadgetsComponent;
  let fixture: ComponentFixture<MusicGadgetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicGadgetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicGadgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
