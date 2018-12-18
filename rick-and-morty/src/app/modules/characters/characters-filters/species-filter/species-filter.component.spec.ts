import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeciesFilterComponent } from './species-filter.component';

describe('SpeciesFilterComponent', () => {
  let component: SpeciesFilterComponent;
  let fixture: ComponentFixture<SpeciesFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeciesFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeciesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
