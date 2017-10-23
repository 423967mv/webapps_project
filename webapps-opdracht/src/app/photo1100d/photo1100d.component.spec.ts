import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Photo1100dComponent } from './photo1100d.component';

describe('Photo1100dComponent', () => {
  let component: Photo1100dComponent;
  let fixture: ComponentFixture<Photo1100dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Photo1100dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Photo1100dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
