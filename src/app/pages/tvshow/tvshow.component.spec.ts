import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowComponent } from './tvshow.component';

describe('MovieComponent', () => {
  let component: TvShowComponent;
  let fixture: ComponentFixture<TvShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TvShowComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
