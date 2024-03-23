import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosShowerComponent } from './photos-shower.component';

describe('PhotosShowerComponent', () => {
  let component: PhotosShowerComponent;
  let fixture: ComponentFixture<PhotosShowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosShowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosShowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
