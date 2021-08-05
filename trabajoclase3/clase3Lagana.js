const indemnizacion = () => {

        let nombre = prompt(`Ingrese su nombre y apellido`);
        let edad = Number(prompt(`Ingrese su edad al momento del accidente`))
        let incapacidad = Number(prompt(`Ingrese el porcentaje  de incapacidad `))
        let ibm = Number(prompt(`Ingrese el Ingreso Base Mensual`));

        let calculo = (53 * ibm * (incapacidad / 100) *  (65 / edad) )
        

        if (confirm(`¿El accidente fue en el lugar de trabajo?`)) {
                alert(`${nombre} la indemnización que le corresponde es de $ ${calculo + (calculo * 20) / 100}.`)
        } else {
                alert(`${nombre} la indemnización que le corresponde es de $ ${calculo}.`)
        }
}

while (confirm(`¿Desea calcular su indemnización por el accidente sufrido?`)){
indemnizacion()
}