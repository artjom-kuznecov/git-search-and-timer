import React from 'react';
import s from './Modal.module.css'

const Modal = ({children, visible, setVisible, bgColor}) => {

    const rootClasses = [s.modal]
    if(visible) rootClasses.push(s.active)
    return (
        <div className={rootClasses.join(' ')} onClick={e => setVisible(false)}>
            <div style = {{backgroundColor: `${bgColor}`}} className={s.content} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
