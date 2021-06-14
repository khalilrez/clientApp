import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirementBeneficiaireComponent } from './virementbenef.component';

describe('VirementBeneficiaireComponent', () => {
  let component: VirementBeneficiaireComponent;
  let fixture: ComponentFixture<VirementBeneficiaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirementBeneficiaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirementBeneficiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
