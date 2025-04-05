import axios from "axios";

/*Metodo get que se esta inyectando en el componente VehiculoCard*/

const VEHICULO_REST_API_URL = "http://localhost:8080/vehiculo";

    export default class VehiculoService{

        static getVehiculos() {
            return axios.get(VEHICULO_REST_API_URL);
        }
        static getVehiculoById(id: number){
            return axios.get(VEHICULO_REST_API_URL + "/" + id);
        }
    }