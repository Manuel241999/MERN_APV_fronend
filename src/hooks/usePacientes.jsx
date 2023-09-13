
import { useContext } from "react";
import  PacientesContext  from "../context/PacientesProvider";//Extrae los datos del context


const usePacientes = () => {
        return useContext(PacientesContext)//Esta onda dice asi: "extraigo los valores del provider" ... "pero le digo cual es el provider"
}

export default usePacientes// Por lo que entiendo esto lleva todos los hijos(Osea todos los componentes del proyecto)
