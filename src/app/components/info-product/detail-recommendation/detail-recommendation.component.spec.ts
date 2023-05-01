import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRecommendationComponent } from './detail-recommendation.component';

describe('DetailRecommendationComponent', () => {
  let component: DetailRecommendationComponent;
  let fixture: ComponentFixture<DetailRecommendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailRecommendationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
