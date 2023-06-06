import { Input } from '@/components/Input'
import { CalculatorContext } from '../../context/calculatorContext'
import { useContext } from 'react'

function AproxValueInput() {

    const { aproxValue, handleAproxValue } = useContext(CalculatorContext) 

    return (
        <div className='aproxValueInput' >
            <Input label="Valor aproximado de vivienda a adquirir" id="aproxValue" type="number" placeholder="ej: 379,072.26" name="aproxValue" value={aproxValue} onChange={(e)=> handleAproxValue(e) } disable={false} />
        </div>
    )
}

export default AproxValueInput