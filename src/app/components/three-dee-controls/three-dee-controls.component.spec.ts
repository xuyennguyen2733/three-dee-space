import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDeeControlsComponent } from './three-dee-controls.component';

describe('ThreeDeeControlsComponent', () => {
  let component: ThreeDeeControlsComponent;
  let fixture: ComponentFixture<ThreeDeeControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThreeDeeControlsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeDeeControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
