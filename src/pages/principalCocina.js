import React from "react";
import HeaderCocina from "../componentes/HeaderCocina";
import BotonesPedidos from "../componentes/pedidosCocina";
import '../style/principalCocina.css';

class PrincipalCocina extends React.Component {
    render() {
        return (
            <div>
                <div className= "Container"> 
                <HeaderCocina/>
                <div className="grid"> 
                <div className="parteUno"> <BotonesPedidos/> </div>
                <div className="parteDos">  </div>
                </div>
                
                </div>
            </div>
        )
    }
};

export default PrincipalCocina