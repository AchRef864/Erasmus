import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ka1Component } from './ka1.component';

describe('Ka1Component', () => {
  let component: Ka1Component;
  let fixture: ComponentFixture<Ka1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ka1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ka1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
