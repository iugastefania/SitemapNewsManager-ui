import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlsFromSitemapComponent } from './urls-from-sitemap.component';

describe('UrlsFromSitemapComponent', () => {
  let component: UrlsFromSitemapComponent;
  let fixture: ComponentFixture<UrlsFromSitemapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UrlsFromSitemapComponent]
    });
    fixture = TestBed.createComponent(UrlsFromSitemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
