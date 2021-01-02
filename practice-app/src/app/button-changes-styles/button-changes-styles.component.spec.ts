import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonChangesStylesComponent } from './button-changes-styles.component';

describe('ButtonChangesStylesComponent', () => {
  let component: ButtonChangesStylesComponent;
  let fixture: ComponentFixture<ButtonChangesStylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonChangesStylesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonChangesStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
