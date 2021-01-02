import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadFromFieldComponent } from './read-from-field.component';

describe('ReadFromFieldComponent', () => {
  let component: ReadFromFieldComponent;
  let fixture: ComponentFixture<ReadFromFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadFromFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadFromFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
