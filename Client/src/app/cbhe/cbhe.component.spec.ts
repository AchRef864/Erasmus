import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbheComponent } from './cbhe.component';

describe('CbheComponent', () => {
  let component: CbheComponent;
  let fixture: ComponentFixture<CbheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CbheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
