import { Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer"
import AVLogo from "@/assets/images/av-logo.png"

interface Props {
    name: string,
    total_cantidad: string,
    total_letra: string,
    honorarios_cantidad: string,
    honorarios_letra: string,
    date: string,
}

function ContratoPdf({name, total_cantidad, total_letra, honorarios_cantidad, honorarios_letra, date}:Props) {

    const styles = StyleSheet.create({
        page: {
            width: '612px',
            height: '792px',
            padding: '20px 50px',
            fontSize: '10px',
        },
        image:{
            width: '150px',
        },
        date:{
            textAlign:'right',
        },
        clausulas:{
            textAlign: 'center',
            fontFamily: 'Helvetica-Bold',
            padding: '20px 0',
        },
        parrafo:{
            width: '100%',
            textAlign: 'justify',
            padding: '10px 0',
            lineHeight: '1.5px',
        },
        header:{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0 0 20px 0',
        },
        black:{
            fontFamily: 'Helvetica-Bold',
        },
        firmas:{
            width: '100%', 
            paddingTop: '50px',
            position:'relative', 
        },
        contratante: {
            width: '30%',
            borderTop: '1px solid black',
            position: 'relative',
            textAlign: 'center',
        },
        contratanteText:{
            fontFamily: 'Helvetica-Bold',
            paddingTop: '10px',
            textAlign: 'center',
        },
        segundaFirma:{
            width: '30%',
            borderTop: '1px solid black',
            position: 'absolute',
            top: '50px',
            left: '350px',
        },
        lic:{
            fontFamily: 'Helvetica-Bold',
            position: 'absolute', 
            top: '-60%',
            left: '-15%',
        },
        repre:{
            paddingTop: '10px', 
            fontFamily: 'Helvetica-Bold',
            textAlign: 'center',
        }
    });
    
    
    return (
        <Document>

            <Page size="A4" style={styles.page}>
                
                <View style={styles.header}>
                    <Image src={AVLogo} style={styles.image} />
                    <Text style={styles.date}>{`${date}`}</Text>
                </View>

                <View >
                    <Text style={styles.parrafo} >
                        CONTRATO DE PRESTACION DE SERVICIOS PROFESIONALES QUE CELEBRAN POR UNA PARTE EL 
                        C. <Text style={styles.black} >{`${name}`}</Text> QUE EN LO SUCESIVO SE LE DENOMINARA PARTE CONTRATANTE 
                        Y DE LA OTRA <Text style={styles.black} >REPRESENTADA EN ESTE ACTO POR SANCHEZ SALGADO ANTONIO</Text> EN LO SUCESIVO 
                        DENOMINADO PRESTADOR DE SERVICIOS.
                    </Text>
                </View>

                <View >
                    <Text style={styles.clausulas} >
                        C L A U S U L A S
                    </Text>
                </View>

                <View >
                    <Text style={styles.parrafo} >
                        <Text style={styles.black} >PRIMERO.</Text> DECLARA Y RATIFICA EN ESTE ACTO LA PARTE CONTRATANTE QUE ACEPTA LA APLICACIÓN 
                        DE SU CREDITO INFONAVIT CORRESIDENCIAL PARA COMPRAR EL INMUEBLE QUE SE ASIGNO, 
                        ASI MISMO DA AUTORIZACION DE LA POSESION, ADMINISTRACION Y PROMOCION DE VENTA DE DICHA 
                        PROPIEDAD AL PRESTADOR DE SERVICIOS.
                    </Text>
                </View>

                <View >
                    <Text style={styles.parrafo} >
                        <Text style={styles.black} >SEGUNDO.</Text> EL PRECIO PACTADO ENTRE LAS PARTES ES LA CANTIDAD DE 
                        <Text style={styles.black} > $ {`${total_cantidad}`} ({`${total_letra}`} M.N. MONEDA NACIONAL) </Text> 
                        MONTO TOTAL DE LA SUBCUENTA DE VIVIENDA DE INFONAVIT A RECUPERAR POR MEDIO DE LA VENTA DE LA 
                        PROPIEDAD QUE SE ASIGNO PARA TAL FIN EN UN PERIODO DE 6 A 8 MESES.
                    </Text>
                </View>

                <View >
                    <Text style={styles.parrafo} >
                        <Text style={styles.black} >TERCERA.</Text>  POR CONCEPTO DE HONORARIOS POR MUTUO ACUERDO SERA LA CANTIDAD 
                        <Text style={styles.black} > $ {`${honorarios_cantidad}`} ({`${honorarios_letra}`} M.N. MONEDA NACIONAL) </Text> 
                        DICHOS HONORARIOS CUBRIRAN LOS GASTOS GENERADOS PARA LA COMPRA Y POSTERIOR VENTA DEL INMUEBLE EN MENCION.
                    </Text>
                </View>

                <View >
                    <Text style={styles.parrafo} >
                        <Text style={styles.black} >CUARTA.</Text> EN CASO DE QUE EL CONTRATANTE DECIDIERA NO CONTINUAR O CANCELAR LA PRESTACION DE 
                        SERVICIOS <Text style={styles.black} > ANTES DE LA COMPRA DEL INMUEBLE </Text> SE OBLIGA A REALIZAR EL PAGO 
                        <Text style={styles.black} > $ {`${honorarios_cantidad}`} ({`${honorarios_letra}`} M.N. MONEDA NACIONAL) </Text> 
                        POR CONCEPTO DE GASTOS ADMINISTRATIVOS DE LA COMPRAVENTA.
                    </Text>
                </View>

                <View >
                    <Text style={styles.parrafo} >
                        <Text style={styles.black} >FINALMENTE</Text>, AMBAS PARTES FIRMAN DE CONFORMIDAD DECLARANDO NO EXISTIR DOLO, MALA FE O VICIOS OCULTOS.
                    </Text>
                </View>
                

                <View style={styles.firmas} >

                    <Text style={styles.contratante} >
                        <Text style={styles.contratanteText} >CONTRATANTE</Text>
                    </Text>


                    <Text style={styles.segundaFirma} >
                        {/* <Text style={styles.lic} >LIC.</Text> */}
                        <Text style={styles.repre} >REPRESENTANTE LEGAL</Text>
                    </Text>

                </View>

            </Page>

        </Document>
    )
}

export default ContratoPdf