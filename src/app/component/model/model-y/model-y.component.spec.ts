import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelYComponent } from './model-y.component';

describe('ModelYComponent', () => {
  let component: ModelYComponent;
  let fixture: ComponentFixture<ModelYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelYComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
