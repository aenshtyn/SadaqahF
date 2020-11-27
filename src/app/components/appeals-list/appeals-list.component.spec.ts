import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppealsListComponent } from './appeals-list.component';

describe('AppealsListComponent', () => {
  let component: AppealsListComponent;
  let fixture: ComponentFixture<AppealsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppealsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppealsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
