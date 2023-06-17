import { CalculatorContext } from "../../context"
import { useContext } from "react"
import { getCurrentDate } from "@/utils/getDate";
import { formatStringToNumber } from "@/utils/formatStringToNumber";
import { numToWord } from "@/utils/numToWord";

import { PDFDownloadLink } from "@react-pdf/renderer";
import ContratoPdf from "../PDF/ContratoPdf";
import { IPdfData } from "@/models";
import { formatNumber } from "@/utils/formatNumber";

function BtnGetPdf() {

    const { dataForm:{name, honorarios, total, gestoria, poderNotarial} } = useContext(CalculatorContext)

    // const dispatch = useDispatch();

    const TOTAL = formatStringToNumber(total);
    const HONORARIOS_TEMP =  formatNumber(formatStringToNumber(honorarios) + formatStringToNumber(gestoria) + formatStringToNumber(poderNotarial)).toString();
    const HONORARIOS =  formatStringToNumber(HONORARIOS_TEMP);

    const data: IPdfData = {
        name: name.toUpperCase(),
        honorarios_cantidad: HONORARIOS_TEMP,
        total_cantidad: total,
        honorarios_letra: numToWord(HONORARIOS).toUpperCase().trim(),
        total_letra: numToWord(TOTAL).toUpperCase().trim(),
        date: getCurrentDate()
    };


    return (
        <>
            {/* <button onClick={()=>{console.log('first')}} disabled={name === '' || honorarios === '0' || total === '0'}  >Generar contrato</button> */}
            {
                name === '' || honorarios === '0' || total === '0' ? ''
                :
                <PDFDownloadLink document={<ContratoPdf name={data.name} total_cantidad={data.total_cantidad} total_letra={data.total_letra} honorarios_cantidad={data.honorarios_cantidad} honorarios_letra={data.honorarios_letra} date={data.date} />} fileName="contrato.pdf">
                    {
                        ({loading}) => loading ? 'Loading' : 'Download'
                    }     
                </PDFDownloadLink>
            }
        </>
    )
}

export default BtnGetPdf