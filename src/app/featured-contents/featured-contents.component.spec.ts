import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedContentsComponent } from './featured-contents.component';

describe('FeaturedContentsComponent', () => {
  let component: FeaturedContentsComponent;
  let fixture: ComponentFixture<FeaturedContentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedContentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
