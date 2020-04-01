import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types';

const Formulario = ({guardarCategoria}) => {
    const OPCIONES = [
        {value: 'general', label: 'general'},
        {value: 'bussines', label: 'bussines'},
        {value: 'entertainment', label: 'entertainment'},
        {value: 'health', label: 'health'},
        {value: 'science', label: 'science'},
        {value: 'sports', label: 'sports'},
        {value: 'technology', label: 'technology'},
      
    ]

    const [categoria, SelectNoticias] = useSelect('general', OPCIONES);
    const buscarNoticias = e => {
        e.preventDefault();
        guardarCategoria(categoria)
    }
    return (
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form onSubmit ={buscarNoticias}>
                    <h2 className={styles.heading}>Encuentra Noticias por Categoría</h2>
                    <SelectNoticias />
                    <div className="input-field col s12">
                        <input 
                        type="submit" 
                        className={`${styles.btnBlock} btn-large amber darken-2`} 
                        value="buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
      );
}


Formulario.protoTypes = {
    guardarCategoria: PropTypes.func.isRequired,
}

// clases css con guion medio pueden ser resueltas asi className={`${styles['btn-block']} btn-large amber darken-2`} 
 
export default Formulario;