import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return(
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return(
        <div className={classes.message}>{props.message}</div>
    );
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Dima'}, 
        {id: 2, name: 'Alina'},
        {id: 3, name: 'Andrew'}, 
        {id: 4, name: 'Tanya'},
        {id: 5, name: 'Lisa'}, 
        {id: 6, name: 'Olya'}
    ];

    let messagesData = [
        {id: 1, message: 'Hi'}, 
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Yo'}, 
        {id: 4, message: 'What is up'},
        {id: 5, message: 'Why not'}, 
        {id: 6, message: 'Hey'}
    ];

    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
             <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
             <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
             <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
             <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
            </div>
            <div className={classes.messages}>
                <Message message={messagesData[0].message} id={messagesData[0].id} />
                <Message message={messagesData[1].message} id={messagesData[1].id} />
                <Message message={messagesData[2].message} id={messagesData[2].id} />
                <Message message={messagesData[3].message} id={messagesData[3].id} />
            </div>
        </div>
    ); 
}

export default Dialogs;