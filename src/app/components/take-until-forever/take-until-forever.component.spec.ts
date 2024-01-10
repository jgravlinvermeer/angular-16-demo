import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeUntilForeverComponent } from './take-until-forever.component';

describe('TakeUntilForeverComponent', () => {
  let component: TakeUntilForeverComponent;
  let fixture: ComponentFixture<TakeUntilForeverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TakeUntilForeverComponent]
    });
    fixture = TestBed.createComponent(TakeUntilForeverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
