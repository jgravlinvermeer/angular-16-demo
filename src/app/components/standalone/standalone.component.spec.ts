import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneComponent } from './standalone.component';

describe('StandaloneComponent', () => {
  let component: StandaloneComponent;
  let fixture: ComponentFixture<StandaloneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StandaloneComponent]
    });
    fixture = TestBed.createComponent(StandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create standalone-child', () => {
    const child = fixture.debugElement.nativeElement.querySelector('app-standalone-child');
    expect(child).toBeTruthy();
    expect(child.textContent).toContain('standalone-child works!');
  });
});
