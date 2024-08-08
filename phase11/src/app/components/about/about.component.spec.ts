import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import { ɵsetAllowDuplicateNgModuleIdsForTest } from '@angular/core';
import { STANDARD_DROPDOWN_ADJACENT_POSITIONS } from '@angular/cdk/overlay';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('SHOULD create WHEN ever', () => {
    expect(component).toBeDefined();
  });

  it('SHOULD show propper message WHEN ever', () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.textContent).toBe(component.message);
  });
});
