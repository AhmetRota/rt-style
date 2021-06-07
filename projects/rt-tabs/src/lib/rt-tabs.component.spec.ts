import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtTabsComponent } from './rt-tabs.component';

describe('RtTabsComponent', () => {
  let component: RtTabsComponent;
  let fixture: ComponentFixture<RtTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RtTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
