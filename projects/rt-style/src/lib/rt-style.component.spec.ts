import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtStyleComponent } from './rt-style.component';

describe('RtStyleComponent', () => {
  let component: RtStyleComponent;
  let fixture: ComponentFixture<RtStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RtStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
