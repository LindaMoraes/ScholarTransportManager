import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderFormComponent } from './ender-form.component';

describe('EnderFormComponent', () => {
  let component: EnderFormComponent;
  let fixture: ComponentFixture<EnderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnderFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
