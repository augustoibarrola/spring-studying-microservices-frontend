import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDeckComponent } from './customer-deck.component';

describe('CustomerDeckComponent', () => {
  let component: CustomerDeckComponent;
  let fixture: ComponentFixture<CustomerDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerDeckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
