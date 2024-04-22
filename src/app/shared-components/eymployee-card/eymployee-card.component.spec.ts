import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EymployeeCardComponent } from './eymployee-card.component';

describe('EymployeeCardComponent', () => {
  let component: EymployeeCardComponent;
  let fixture: ComponentFixture<EymployeeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EymployeeCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EymployeeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
