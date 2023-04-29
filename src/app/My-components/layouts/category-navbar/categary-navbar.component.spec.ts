import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategaryNavbarComponent } from './categary-navbar.component';

describe('CategaryNavbarComponent', () => {
  let component: CategaryNavbarComponent;
  let fixture: ComponentFixture<CategaryNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategaryNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategaryNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
