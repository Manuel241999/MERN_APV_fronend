import { useEffect,useState } from 'react';
import {useParams,Link} from 'react-router-dom'
import Alerta from '../components/alerta';
import clienteAxios from '../config/axios';

//Confirmamos despues del envio del email.
const ConfirmarCuenta = () => {
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false);
  const [cargando, setCargando] = useState(true);
  const[alerta,SetAlerta] = useState({});

  const params = useParams();
  console.log(params);
  const {token} = params;  

  useEffect(() => {
    console.log("Efecto de confirmación de cuenta ejecutado");
    const confirmarCuenta = async () => {
      try {
        const url = `veterinarios/confirmar/${token}`;
        const {data} = await clienteAxios(url);
        //Si este codigo se ejecuta, significa que se confirmo correctamente
        setCuentaConfirmada(true);
        SetAlerta({
          msg: data.msg  
        });//esta respuesta viene del mero backend
        console.log('Estoy en confirmar');
      } catch (error) {
       SetAlerta({
        msg: error.response.data.msg,
        error: true
       });//esta respuesta viene del mero backend
       console.log('Estoy en error');
      }
      setCargando(false);
      
    }
    
    confirmarCuenta();
  }, []);



    return (
      <>
      <div>
          <h1 className="text-indigo-600 font-black text-6xl">
          Confirma tu Cuenta y Comieza a Administrar {""}
          <span className="text-black">tus Pacientes</span>
            </h1>
        </div>

        <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        {!cargando && 
        <Alerta
        alerta={alerta}//Cuando ya no este como true, ya muestra la alerta
        />}

        {cuentaConfirmada && (
          <Link
          className="block text-center my-5 text-gray-500 hover:text-indigo-600"
          to="/">Inicia Sesión
          </Link>
        )}
        </div>  
      </>
    )
  }
  
  export default ConfirmarCuenta