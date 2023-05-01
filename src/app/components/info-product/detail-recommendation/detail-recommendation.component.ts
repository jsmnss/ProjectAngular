import { Component } from '@angular/core';

@Component({
  selector: 'app-detail-recommendation',
  templateUrl: './detail-recommendation.component.html',
  styleUrls: ['./detail-recommendation.component.scss']
})
export class DetailRecommendationComponent {

  /**
   * Variable que valida si se muestra información adicional de la recomendación
   */
  public showMore: boolean;

  constructor() {
    this.showMore =false;
  }

  /**
   * Método que muestra o no la información adicional del la recomendación
   */
  public showDescription():void {
    this.showMore = !this.showMore;
  }

}
