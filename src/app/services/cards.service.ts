import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  /**
   * Variable que contiene la url de la api
   */
  private apiCards: string;

  constructor(private http: HttpClient) {
    this.apiCards = 'https://62e152f8fa99731d75d44571.mockapi.io/api/v1/test-front-end-skandia/cards'
   }

   /**
    * Método que retorna la url de la api
    * @returns url de la api
    */
  public getUrlApi():string {
    return this.apiCards;
  }

   /**
    * Método que permite obtener la información de las tarjetas con una petición GET a la api,
    * también completa la información que no es parte del negocio para la visualización de cada tarjeta
    * @returns Observable que contiene la respuesta de la api ajustada
    */
  public getCards(): Observable<{listCard: Card[]}>{
    return this.http.get<{listCard: Card[]}>(this.apiCards).pipe( map((item) => {
      let countCardIcon = 1;
      let countCardBorderColor = 1;
      item.listCard.forEach((card: Card) => {
        card.iconCard = countCardIcon;
        card.colorBorderCard = this.getColorBorder(countCardBorderColor);
        countCardBorderColor = countCardBorderColor < 4 ? countCardBorderColor + 1 : 1;
        countCardIcon = countCardIcon < 3 ? countCardIcon + 1 : 1;
      });
      return item
    }));
  }

  /**
   * Método que asigna el color del borde de la tarjeta de acuerdo a la posición
   * @param index de la posición de la tarjeta
   * @returns Retorna el color del borde inferior de la tarjeta
   */
  private getColorBorder(index: number):string {
    switch(index){
      case 1:
        return '#A4D071';
      case 2:
        return '#A5D7E1';
      case 3:
        return '#63AABC';
      case 4:
        return '#FF9460'; 
      default:
        return '';
    }
  }
}
