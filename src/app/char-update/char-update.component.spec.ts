import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharUpdateComponent } from './char-update.component';

describe('CharUpdateComponent', () => {
  let component: CharUpdateComponent;
  let fixture: ComponentFixture<CharUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
