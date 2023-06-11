import { getPDF } from "@/services/getPdf"
import { CalculatorContext } from "../../context"
import { useContext } from "react"
import { getCurrentDate } from "@/utils/getDate";
import { formatStringToNumber } from "@/utils/formatStringToNumber";
import { numToWord } from "@/utils/numToWord";
import { useDispatch } from "react-redux";
import { hideLoader, showLoader } from "@/redux/states/Loader.slice";

function BtnGetPdf() {

    const { dataForm:{name, honorarios, total} } = useContext(CalculatorContext)

    const dispatch = useDispatch();

    const createPdf = async () => {

        const TOTAL = formatStringToNumber(total)
        const HONORARIOS = formatStringToNumber(honorarios)

        const data = {
            name: name.toUpperCase(),
            honorarios_cantidad: honorarios,
            total_cantidad: total,
            honorarios_letra: numToWord(HONORARIOS).toUpperCase(),
            total_letra: numToWord(TOTAL).toUpperCase(),
            date: getCurrentDate()
        }
        
        dispatch(showLoader());

        await getPDF(data)
            .then((res)=>{
                const pdfUrl = res.data.data
                window.open(pdfUrl, '_blank')
            }).catch((err)=>{
                console.log(err)
            })
        
        dispatch(hideLoader())
    };

    return (
        <button onClick={()=>createPdf()} disabled={name === '' || honorarios === '0' || total === '0'}  >Generar contrato</button>
    )
}

export default BtnGetPdf