import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppealComponent } from './add-appeal.component';

describe('AddAppealComponent', () => {
  let component: AddAppealComponent;
  let fixture: ComponentFixture<AddAppealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAppealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAppealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
