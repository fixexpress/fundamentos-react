import React from "react";
import './Card.css';

// funciona somente em algumas versoes
// export default props =>
//     <div className="Card">
//         <div className="Conteudo">
//             {props.children}
//         </div>
//         <div className="Footer">
//             {props.titulo}
//         </div>
//     </div>


const Exportar = (props) => {
    return (
    <div className="Card">
        <div className="Conteudo">
            {props.children}
        </div>
        <div className="Footer">
            {props.titulo}
        </div>
    </div>
    )

   };
   export default Exportar




