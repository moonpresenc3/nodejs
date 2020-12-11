import React from 'react';
import cl from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                <div className={cl.dialog + ' ' + cl.active}>
                    Ivan
                </div>
                <div className={cl.dialog}>
                    Dmitry
                </div>
                <div className={cl.dialog}>
                    Stas
                </div>
            </div>
            <div className={cl.messages}>
                <div className={cl.message}>
                    Hi
                </div>
                <div className={cl.message}>
                    How
                </div>
                <div className={cl.message}>
                    Are You
                </div>
            </div>
        </div>
    );
}

export default Dialogs;