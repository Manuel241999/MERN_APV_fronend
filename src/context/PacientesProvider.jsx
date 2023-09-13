import { createContext, useState, useEffect } from "react";
import clienteAxios from '../config/axios'
import useAuth from "../hooks/useAuth";

const PacientesContext = createContext()

export const PacientesProvider = ({children}) => {

    const [pacientes, setPacientes] = useState([])
    const [paciente, setPaciente] = useState({})
    const {auth} = useAuth()

    //Cuando cargue este componente vamos a cargar la API
    useEffect(() => {
        const obtenerPacientes = async () => {
            try {
                const token = localStorage.getItem('token')
                if(!token) return

                const config = {
                    headers:{
                        "Content-Type":"application/json",
                        Authorization: `Bearer ${token}`
                    }            
                }
                const {data} = await clienteAxios('/pacientes',config)
                setPacientes(data)
                
            } catch (error) {
                console.log("🚀 ~ file: PacientesProvider.jsx:16 ~ obtenerPacientes ~ error:", error)
            }
        }
        obtenerPacientes()
    },[auth])//Tener esta dependencia hace aue se traiga los pacientes literalmente 2 veces(este errror es porque se trae los pacientes de un veterinario que no es a otro que nada que ver)
    //Insertando los pacientes en la base de datos:
    const guardarPaciente =  async (paciente) => {

        const token = localStorage.getItem('token')
        const config = {
                headers:{
                    "Content-Type":"application/json",
                    Authorization: `Bearer ${token}`
                }            
            }

        if(paciente.id){
            try {
                const {data} = await clienteAxios.put(`/pacientes/${paciente.id}`, paciente,config)
                
                const pacientesActualizado = pacientes.map(pacienteState => pacienteState._id  ===
                data._id ? data : pacienteState)
                setPacientes(pacientesActualizado)
        
            } catch (error) {
                console.log(error)
            }
        }else{
            try {

                  const {data} = await clienteAxios.post('/pacientes',paciente,config)
                  const {createdAt, updateAt, __v, ...pacienteAlmacendo} = data// esta forma ingeniosa saca los datos que no necesito de moongose y lo almacenas en unuevo array
                  setPacientes([pacienteAlmacendo, ...pacientes])//Lo metes al State que tenia los datos anteriores
    
               } catch (error) {
                console.log(error.response.data.msg)
               }
        }
          
    }


    const setEdicion = (paciente) => {
        setPaciente(paciente)
    }


    const eliminarPaciente = async id => {
        const confirmar = confirm('¿Confirmas que deseas eliminar?')
        if(confirmar){
            try {
                const token = localStorage.getItem('token')
                const config = {
                    headers:{
                        "Content-Type":"application/json",
                        Authorization: `Bearer ${token}`
                    }            
                }

                const {data} = await clienteAxios.delete(`/pacientes/${id}`,config)
                const pacientesActualizado = pacientes.filter(pacientesState => pacientesState._id !== id)
                setPacientes(pacientesActualizado)
            } catch (error) {
                console.log("🚀 ~ file: PacientesProvider.jsx:81 ~ eliminarPaciente ~ error:", error)
            }
        }
    }

        return(
            <PacientesContext.Provider
             value={{
                pacientes,
                paciente,
                guardarPaciente,
                setEdicion,
                eliminarPaciente
             }}
            >
                {children}
            </PacientesContext.Provider>
        )
}

export default PacientesContext;