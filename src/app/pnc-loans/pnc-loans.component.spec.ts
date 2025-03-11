import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PncLoansComponent } from './pnc-loans.component';

describe('PncLoansComponent', () => {
  let component: PncLoansComponent;
  let fixture: ComponentFixture<PncLoansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PncLoansComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PncLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
