import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGoonieComponent } from './add-goonie.component';

describe('AddGoonieComponent', () => {
  let component: AddGoonieComponent;
  let fixture: ComponentFixture<AddGoonieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGoonieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGoonieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
