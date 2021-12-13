import React, {useState} from 'react';
import classes from './UpperPanel.module.css'
import {Nav} from "react-bootstrap";

const UpperPanel = ({setActiveModalForm}) => {

    const [activeNav, setActiveNav] = useState(true);

    return (
        <div className={classes.panel}>
            <Nav fill variant="tabs" defaultActiveKey="MyCards" style={{marginLeft:"6%", height: "80%"}}>
                <Nav.Item>
                    <Nav.Link eventKey="MyCards"
                              style={activeNav ? {color: "black"}: {color: "white"}}
                              onClick={()=>setActiveNav(true)}
                    >
                        Мои карточки
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="CommunityCards"
                              style={activeNav ? {color: "white"} : {color: "black"}}
                              onClick={()=>setActiveNav(false)}
                    >
                        Карточки сообщества
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <button className={classes.panel__button} onClick={()=>setActiveModalForm(true)}>
                +Добавить карточку
            </button>
        </div>
    );
};

export default UpperPanel;