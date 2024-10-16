import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDeeBoxComponent } from './three-dee-box.component';

describe('ThreeDeeBoxComponent', () => {
  let component: ThreeDeeBoxComponent;
  let fixture: ComponentFixture<ThreeDeeBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThreeDeeBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeDeeBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
