import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirementCaCComponent } from './virementcac.component';

describe('VirementCaCComponent', () => {
  let component: VirementCaCComponent;
  let fixture: ComponentFixture<VirementCaCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirementCaCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirementCaCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
