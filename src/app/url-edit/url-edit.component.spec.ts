import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlEditComponent } from './url-edit.component';

describe('UrlEditComponent', () => {
  let component: UrlEditComponent;
  let fixture: ComponentFixture<UrlEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UrlEditComponent]
    });
    fixture = TestBed.createComponent(UrlEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
