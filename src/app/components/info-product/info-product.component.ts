import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-info-product',
  templateUrl: './info-product.component.html',
  styleUrls: ['./info-product.component.scss']
})
export class InfoProductComponent implements OnInit {

  /**
   * Variable que trae la información del saldo
   */
  public balance: number;

  /**
   * Variable que trae la información de la categoría
   */
  public category: string;

  /**
   * Variable que valida si la tarjeta esta seleccionada
   */
  public isClicked: boolean;

  /**
   * Variable que contiene la ruta del icono del botón en la parte izquierda de la lista de productos
   */
  public imgButtonLeft: string;

  /**
   * Variable que contiene la ruta del icono del botón en la parte derecha de la lista de productos
   */
  public imgButtonRight: string;

  /**
   * Variable que contiene toda la información de las tarjetas
   */
  public infoCards: {listCard: Card[]};

  /**
   * Variable que valida si se muestra la recomendación
   */
  public showRecommendation: boolean;

  constructor(public cardService: CardsService) {
    this.balance = 6000000;
    this.category = 'Conocer mi sobrino';
    this.isClicked = false;
    this.imgButtonLeft = 'circle-gray.svg';
    this.imgButtonRight = 'circle-green.svg';
    this.infoCards = {listCard: []}
    this.showRecommendation = false;
  }

  ngOnInit(): void {
    /**
     * Llamado del servicio que obtiene la información de las tarjetas
     */
    this.cardService.getCards().subscribe({
      next: (cards: {listCard: Card[]}) => {
        this.infoCards = cards;
      },
      error: (error: any) => {
        console.error('ErrorGetCards: ' + error);
        alert('Se presento un error, no se tienen productos por el momento');
      }
    });
  }

  /**
   * Método que permite navegar entre la lista de las tarjetas y se modifican los iconos de los botones
   * que controlan la vista
   * @param isRight Valida si la acción es hacia la derecha
   */
  public validateScrollCards(isRight: boolean): void {
    const scrollPos: number = isRight ?
      document.getElementById('content-cards')!.scrollLeft + 365 :
      document.getElementById('content-cards')!.scrollLeft - 365;
    document.getElementById('content-cards')!.scrollTo({
      left: scrollPos,
      behavior: 'smooth'
    });
    const scrollMaxX =
      document.getElementById('content-cards')!.scrollWidth - document.getElementById('content-cards')!.clientWidth
    this.imgButtonLeft = (scrollPos <= 0) ? 'circle-gray.svg' : 'circle-green.svg';
    this.imgButtonRight = (scrollPos >= scrollMaxX) ? 'circle-gray.svg' : 'circle-green.svg';
  }

  /**
   * Método que permite el desplazamiento a la sección de la lista de los productos
   */
  public moveScrollToCards():void {
    const offsetTop = document.getElementById('info-adicional-product')!.offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    })
  }

}
