/**
 * Interfaz que contiene todas las características de la tarjeta
 */
export interface Card {
    /**
     * Variable que contiene el nombre del producto
     */
    nameProduct: string,

    /**
     * Variable que contiene el identificador del producto
     */
    numberProduct: number,

    /**
     * Variable que contiene el saldo del producto
     */
    balanceProduct: number,

    /**
     * Variable que contiene el detalle del producto
     */
    detaildProduct: string,

    /**
     * Variable que valida si la tarjeta es seleccionada
     */
    isClicked: boolean,

    /**
     * Variable que valida que icono tiene en la descripción del producto
     */
    iconCard: number,

    /**
     * Variable que valida el color del borde inferior de la tarjeta
     */
    colorBorderCard: string
}
