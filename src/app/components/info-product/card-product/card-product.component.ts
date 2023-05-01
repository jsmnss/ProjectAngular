import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent {
  /**
   * Variable que valida si es la ultima tarjeta
   */
  @Input() public isLastCard: boolean;

  /**
   * Variable que modifica el color del borde inferior de la tarjeta
   */
  @Input() public colorBorderCard: string;

  /**
   * Variable que contiene la información de la tarjeta
   */
  @Input() public cardInfo: Card;

  /**
   * Variable que valida si se muestra la sección de la recomendación
   */
  @Input() public showRecommendation?: boolean;

  /**
   * Variable que devuelve si se muestra la sección de la recomendación
   */
  @Output() public getDescriptionRecommendation: EventEmitter<boolean>;

  /**
   * Variable que modifica el color del checkbox
   */
  public styleClicked: string;

  constructor(){
    this.styleClicked = '';
    this.isLastCard = false;
    this.colorBorderCard = '#FF9460';
    this.cardInfo = {
      nameProduct: '',
      numberProduct: 0,
      balanceProduct: 0,
      detaildProduct: '',
      isClicked: false,
      iconCard: 1,
      colorBorderCard: ''
    };
    this.getDescriptionRecommendation = new EventEmitter<boolean>();
    this.showRecommendation = false;
  }

  /**
   * Método para cambiar el estado de la tarjeta si se selecciona
   * @param event evento del checkbox
   */
  public changeCheck(event: any): void{
    this.cardInfo.isClicked = event.target.checked;
    this.styleClicked = this.cardInfo.isClicked ? '0px 0px 6px #00C83C !important' : '0px 0px 6px #00000029';
  }

  /**
   * Método para mostrar o no la recomendación
   */
  public showDescriptionRecommendation(){
    this.getDescriptionRecommendation.emit(!this.showRecommendation);
  }

}
