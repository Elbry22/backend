import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallreyComponent } from './gallrey.component';

describe('GallreyComponent', () => {
  let component: GallreyComponent;
  let fixture: ComponentFixture<GallreyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GallreyComponent]
    });
    fixture = TestBed.createComponent(GallreyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
