import React from 'react';
import Error_message from './Error_message';

const Form_modal = ({modalVisibility, close_modal, task, setTask, insert_task, errors}) => {

    const {titulo, descripcion, status} = task;
    
    const get_data = (e) => {
        setTask({...task, [e.target.name]: e.target.value });
    }

    const active_class = modalVisibility ? "modal is-active": "modal";
    return (
        <div className={active_class}>
            <div className="modal-background" onClick={close_modal}></div>
            <div className="modal-card">
            <header className="modal-card-head">
                <p className="modal-card-title">Nueva Tarea</p>
                <button className="delete" aria-label="close" onClick={close_modal}></button>
            </header>
            <section className="modal-card-body">
                <div className="field">
                    <label className="label" htmlFor='titulo'>Titulo</label>
                    <div className="control">
                        <input 
                            className="input" 
                            type="text" 
                            id="titulo" 
                            name="titulo" 
                            value={titulo}
                            onChange={get_data}
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label" htmlFor='descripcion'>Descripcion</label>
                    <div className="control">
                        <textarea 
                            className="textarea" 
                            id="descripcion" 
                            name="descripcion"
                            value={descripcion}
                            onChange={get_data}
                        ></textarea>
                    </div>
                </div>

                <div className="field">
                    <label className="label" htmlFor='status'>Status</label>
                    <div className="control">
                        <div className="select" id="status" name="status">
                            <select 
                                value={status} 
                                onChange={get_data}
                                name="status"
                            >
                                <option value="">Selecciona un status</option>
                                <option value="Pendientes">Pendientes</option>
                                <option value="En curso">En curso</option>
                                <option value="Finalizadas">Finalizadas</option>
                            </select>
                        </div>
                    </div>
                </div>
                {errors.map(error_element => (
                    <Error_message 
                        key={Math.random().toString().substring(2)}
                        error={error_element}
                    />
                ))}
                
            </section>
            <footer className="modal-card-foot">
                <button className="button is-success" onClick={insert_task}>Guardar</button>
                <button className="button" onClick={close_modal}>Cancelar</button>
            </footer>
            </div>
        </div>
    );
};

export default Form_modal;