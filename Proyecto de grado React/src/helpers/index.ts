export default function FormatCurrency(precio: number){
    return new Intl.NumberFormat("es-CO", {style: 'currency', currency: 'COP'}).format(precio);
}