import { useContext } from "react"
import { CalculatorContext } from "../../context/calculatorContext"
import { formatStringToNumber } from "@/utils/formatStringToNumber";
import { PreviewContainer } from "./preview.style";
import { getCurrentDate } from "@/utils/getDate";
import { numToWord } from "@/utils/numToWord";


function Preview() {

    const { dataForm:{name, total, honorarios} } = useContext(CalculatorContext)
    const TOTAL = formatStringToNumber(total)
    const HONORARIOS = formatStringToNumber(honorarios)
    
    return (
        <PreviewContainer>
            <p>
                {getCurrentDate()}
            </p>
            <p>
                CONTRATO DE PRESTACION DE SERVICIOS PROFESIONALES QUE CELEBRAN POR UNA PARTE EL 
                C. <strong>{name}</strong> QUE EN LO SUCESIVO SE LE DENOMINARA PARTE CONTRATANTE 
                Y DE LA OTRA <strong>REPRESENTADA EN ESTE ACTO POR SANCHEZ SALGADO ANTONIO</strong> EN LO SUCESIVO 
                DENOMINADO PRESTADOR DE SERVICIOS.
            </p>

            <p>C L A U SU L A S</p>

            <p>
                <strong>PRIMERO.</strong> DECLARA Y RATIFICA EN ESTE ACTO LA PARTE CONTRATANTE QUE ACEPTA LA APLICACIÓN 
                DE SU CREDITO INFONAVIT CORRESIDENCIAL PARA COMPRAR EL INMUEBLE QUE SE ASIGNO, 
                ASI MISMO DA AUTORIZACION DE LA POSESION, ADMINISTRACION Y PROMOCION DE VENTA DE DICHA 
                PROPIEDAD AL PRESTADOR DE SERVICIOS.
            </p>

            <p>
                <strong>SEGUNDO.</strong> EL PRECIO PACTADO ENTRE LAS PARTES ES LA CANTIDAD DE 
                <strong> $ {total} ( {numToWord(TOTAL)} M.N. MONEDA NACIONAL) </strong> 
                MONTO TOTAL DE LA SUBCUENTA DE VIVIENDA DE INFONAVIT A RECUPERAR POR MEDIO DE LA VENTA DE LA 
                PROPIEDAD QUE SE ASIGNO PARA TAL FIN EN UN PERIODO DE 6 A 8 MESES.
            </p>

            <p>
                <strong>TERCERA.</strong>  POR CONCEPTO DE HONORARIOS POR MUTUO ACUERDO SERA LA CANTIDAD 
                <strong> $ {honorarios} ({numToWord(HONORARIOS)} M.N. MONEDA NACIONAL) </strong> 
                DICHOS HONORARIOS CUBRIRAN LOS GASTOS GENERADOS PARA LA COMPRA Y POSTERIOR VENTA DEL INMUEBLE EN MENCION.
            </p>

            <p>
                <strong>CUARTA.</strong> EN CASO DE QUE EL CONTRATANTE DECIDIERA NO CONTINUAR O CANCELAR LA PRESTACION DE 
                SERVICIOS <strong> ANTES DE LA COMPRA DEL INMUEBLE </strong> SE OBLIGA A REALIZAR EL PAGO 
                <strong> $ {honorarios} ({numToWord(HONORARIOS)} M.N. MONEDA NACIONAL) </strong> 
                POR CONCEPTO DE GASTOS ADMINISTRATIVOS DE LA COMPRAVENTA.
            </p>

            <p>
                <strong>FINALMENTE</strong>, AMBAS PARTES FIRMAN DE CONFORMIDAD DECLARANDO NO EXISTIR DOLO, MALA FE O VICIOS OCULTOS.
            </p>
        </PreviewContainer>
    )
}

export default Preview