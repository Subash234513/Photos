import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbtScreenComponent } from './dbt-screen.component';

describe('DbtScreenComponent', () => {
  let component: DbtScreenComponent;
  let fixture: ComponentFixture<DbtScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbtScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbtScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
