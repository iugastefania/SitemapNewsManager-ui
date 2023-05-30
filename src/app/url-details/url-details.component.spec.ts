import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlDetailsComponent } from './url-details.component';

describe('UrlDetailsComponent', () => {
  let component: UrlDetailsComponent;
  let fixture: ComponentFixture<UrlDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UrlDetailsComponent]
    });
    fixture = TestBed.createComponent(UrlDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
