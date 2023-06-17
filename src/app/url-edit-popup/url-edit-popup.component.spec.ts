import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlEditPopupComponent } from './url-edit-popup.component';

describe('UrlEditPopupComponent', () => {
  let component: UrlEditPopupComponent;
  let fixture: ComponentFixture<UrlEditPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UrlEditPopupComponent],
    });
    fixture = TestBed.createComponent(UrlEditPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
