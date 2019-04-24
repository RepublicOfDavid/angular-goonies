import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoonieItemComponent } from './goonie-item.component';

describe('GoonieItemComponent', () => {
  let component: GoonieItemComponent;
  let fixture: ComponentFixture<GoonieItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoonieItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoonieItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
