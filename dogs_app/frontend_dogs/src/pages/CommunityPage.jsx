import React, {useState} from 'react';
import ModalWindow from "../component/UI/ModalWindow/ModalWindow";
import FormCommunity from "../component/UI/FormCommunity/FormCommunity";

const CommunityPage = () => {

    const [activeAddCard, setActiveAddCard] = useState(false);

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-auto">
                    <button className="btn-info" style={{borderRadius: 10, fontSize: 18}} onClick={()=>setActiveAddCard(true)}>
                        +Добавить карточку
                    </button>
                    <ModalWindow
                        visible={activeAddCard}
                        setVisible={setActiveAddCard}>
                        <FormCommunity setVisible={setActiveAddCard}/>
                    </ModalWindow>
                </div>


            </div>
        </div>
    );
};

export default CommunityPage;