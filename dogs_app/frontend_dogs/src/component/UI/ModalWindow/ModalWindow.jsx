import React from 'react';
import classes from './ModalWindow.module.css'

const ModalWindow = ({children, visible, setVisible}) => {

    const rootClasses=[classes.Modal]

    if (visible){
        rootClasses.push(classes.active);
    }

    return (
        <div className={rootClasses.join(' ')}>
            <div className={classes.ModalContent}>
                {children}
            </div>
        </div>
    );
};

export default ModalWindow;