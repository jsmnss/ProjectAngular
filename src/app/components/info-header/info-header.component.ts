import { Component } from '@angular/core';

@Component({
  selector: 'app-info-header',
  templateUrl: './info-header.component.html',
  styleUrls: ['./info-header.component.scss']
})
export class InfoHeaderComponent {

  /**
   * Variable que determina la imagen de la opción de preguntas
   */
  public imgQuestion: string;

  constructor(){
    this.imgQuestion = 'question1';
  }


  /**
   * Método que cambia la imagen de las preguntas cuando entra el mouse al div
   */
  public mouseEnter():void {
    this.imgQuestion = "question2";
  }

  /**
   * Método que cambia la imagen de las preguntas cuando sale el mouse del div
   */
  public mouseOut():void {
    this.imgQuestion = "question1";
  }
}
