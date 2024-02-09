import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerFilmsComponent } from './lister-films.component';

describe('ListerFilmsComponent', () => {
  let component: ListerFilmsComponent;
  let fixture: ComponentFixture<ListerFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListerFilmsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListerFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
