import React from "react";
import { IFormData } from "../models";


interface ICalculatorContext{
    aproxValue: number,
    handleAproxValue: (value:number) => void,
    dataForm: IFormData,
    handleDataForm: (e:React.ChangeEvent<HTMLInputElement>) => void,
}

export const CalculatorContext = React.createContext( {} as ICalculatorContext )