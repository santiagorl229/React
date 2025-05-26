//import { Fragment } from "react"; 
//Un fragmento es un agrupador de elementos html que evita la posibilidad de usar div. Se puede usar la etiqueta <Fragment></Fragment>
//Importando el Fragment o quitar el import y fragment y usar unicamente las etiquetas <></>

/*props---> FirstApp = ({title, subTitle})--> es un objeto que permite tener una comunicacion entre componentes del componete padre con el componente hijo ejemplo en el main: <React.StrictMode> es el padre de
//HelloWorldApp y FirstApp  ok - Vamos aqui*/


import PropTypes from 'prop-types';
export const FirstApp = ({title, subTitle, name}) =>{
    return(
        <>
            <h1>{title}</h1>
            {/* JSON.stringify(newMessage) */}
            <p>{subTitle + 1}</p>
            <p>{name}</p>
        </>
    ); 
}

FirstApp.propTypes ={
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired
}
FirstApp.defaultProps = {
    title: 'No hay Titulo',
    subTitle: 'No hay subtitulo',
    name: 'Hola soy Santiago'
}