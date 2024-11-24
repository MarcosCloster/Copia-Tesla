import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomosTeslaComponent } from './somos-tesla.component';

describe('SomosTeslaComponent', () => {
  let component: SomosTeslaComponent;
  let fixture: ComponentFixture<SomosTeslaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SomosTeslaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SomosTeslaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
