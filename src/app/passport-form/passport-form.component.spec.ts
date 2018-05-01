import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassportFormComponent } from './passport-form.component';

describe('PassportFormComponent', () => {
  let component: PassportFormComponent;
  let fixture: ComponentFixture<PassportFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassportFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
