
import { useContext } from "react";
import  AuthContext  from "../context/AuthProvider";//Extrae los datos del context


const useAuth = () => {
        return useContext(AuthContext)//Esta onda dice asi: "extraigo los valores del provider" ... "pero le digo cual es el provider"
}

export default useAuth// Por lo que entiendo esto lleva todos los hijos(Osea todos los componentes del proyecto)
