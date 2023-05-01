import { NgModule } from '@angular/core';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { InfoProductComponent } from './info-product.component';
import { DetailInfoComponent } from './detail-info/detail-info.component';
import { CardProductComponent } from './card-product/card-product.component';
import { CardsService } from 'src/app/services/cards.service';
import { DetailRecommendationComponent } from './detail-recommendation/detail-recommendation.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    BreadcrumbComponent,
    InfoProductComponent,
    DetailInfoComponent,
    CardProductComponent,
    DetailRecommendationComponent
  ],
  providers: [CardsService],
  imports: [CommonModule],
  exports: [InfoProductComponent]
})
export class InfoProductModule { }
