import { useContext, useRef } from "react"
import { TableCalculatorContainer } from "./tableCalculator.style"

import { CalculatorContext } from "../../context/calculatorContext"
import { Fields } from "./fields"
import { IField } from "../../models"
import { Input } from "@/components/Input"
import BtnGetPdf from "../BtnGetPdf/BtnGetPdf"
import AVLOGO from '@/assets/images/av-logo.png';
import CARVI from '@/assets/images/carvi-logo.png';
import html2canvas from 'html2canvas';



function TableCalculator() {

  const { dataForm, handleDataForm} = useContext(CalculatorContext)

  const TableRef = useRef<HTMLDivElement>(null);

  const handleGenerateImage = () =>{

    if(TableRef.current){

      html2canvas(TableRef.current, {windowWidth: 800, windowHeight: 900}).then(function(canvas) {
        const base64image = canvas.toDataURL("image/png");
        const link = document.createElement('a');
        link.setAttribute('href', base64image);
        link.setAttribute('download', "av-image.png");
        link.click();
        link.remove();
      });

    }
  }

  return (
    <TableCalculatorContainer>

      <div className="table-body" ref={TableRef} >
        <header>
          <img src={AVLOGO} />
          <img src={CARVI} />
        </header>
        {
          Fields.map((field: IField)=>{
            const fieldIdAsKeyValue = field.id as keyof typeof dataForm
            
            return(   
              <Input key={field.id} name={field.id} value={dataForm[fieldIdAsKeyValue]} id={field.id} label={field.label} type={field.type} placeholder={field.placeholder} onChange={(e)=>handleDataForm(e)} disable={field.disable} />
            )
          })
        }
      </div>

      <footer>
        <BtnGetPdf/>
        <button onClick={handleGenerateImage} disabled={dataForm.nss === '' || dataForm.ssv === '0' } >Generar Imagen</button>
      </footer>
    </TableCalculatorContainer>
  )
}

export default TableCalculator