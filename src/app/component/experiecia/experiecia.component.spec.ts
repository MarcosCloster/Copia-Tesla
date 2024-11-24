import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperieciaComponent } from './experiecia.component';

describe('ExperieciaComponent', () => {
  let component: ExperieciaComponent;
  let fixture: ComponentFixture<ExperieciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperieciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperieciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
