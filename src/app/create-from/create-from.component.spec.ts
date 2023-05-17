import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFromComponent } from './create-from.component';

describe('CrateFromComponent', () => {
  let component: CreateFromComponent;
  let fixture: ComponentFixture<CreateFromComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateFromComponent]
    });
    fixture = TestBed.createComponent(CreateFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
