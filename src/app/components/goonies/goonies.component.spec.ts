import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GooniesComponent } from './goonies.component';

describe('GooniesComponent', () => {
  let component: GooniesComponent;
  let fixture: ComponentFixture<GooniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GooniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GooniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
