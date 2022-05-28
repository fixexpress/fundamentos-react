import './App.css'
import React from "react";


import Primeiro from './components/Primeiro'
// import ComParametro from './components/ComParametro'
// import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card'




export default props => (

    <div className="App">

        <Card titulo="Primeiro Componente">
            <Primeiro />
            {/* Conteudo */}
        </Card>
        <Card titulo="Exercício X">Conteudo</Card>

        {/* <ComFilhos>
            <ut>
                <li>Ana</li>
                <li>Bia</li>
                <li>Carlos</li>
                <li>Daniel</li>
            </ut>
        </ComFilhos> */}
        {/* <Primeiro></Primeiro>
        <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtitulo" />
        <ComParametro titulo="Opa" subtitulo="Epa" /> */}


    </div>

)
