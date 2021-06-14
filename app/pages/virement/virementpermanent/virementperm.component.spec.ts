import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirementPermComponent } from './virementperm.component';

describe('VirementPermComponent', () => {
  let component: VirementPermComponent;
  let fixture: ComponentFixture<VirementPermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirementPermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirementPermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
