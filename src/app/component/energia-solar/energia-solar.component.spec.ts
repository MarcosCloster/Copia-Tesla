import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergiaSolarComponent } from './energia-solar.component';

describe('EnergiaSolarComponent', () => {
  let component: EnergiaSolarComponent;
  let fixture: ComponentFixture<EnergiaSolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnergiaSolarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnergiaSolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
