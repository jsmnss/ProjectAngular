import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-detail-info',
  templateUrl: './detail-info.component.html',
  styleUrls: ['./detail-info.component.scss']
})
export class DetailInfoComponent {
  /**
   * Variable que trae la información del saldo
   */
   @Input() public balance: number;

   /**
    * Variable que trae la información de la categoría
    */
   @Input() public category: string;

   /**
    * Variable que retorna si se debe desplazar a la sección de la descripción de los productos
    */
   @Output() public moveToDescription: EventEmitter<boolean>;
   
   constructor() {
    this.balance = 0;
    this.category = '';
    this.moveToDescription = new EventEmitter<boolean>();
   }

   public changeViewItem():void {
    this.moveToDescription.emit(true);
   }
}
