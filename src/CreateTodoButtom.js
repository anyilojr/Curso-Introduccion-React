import { click } from "@testing-library/user-event/dist/click";
import react from "react";
import './CreateTodoButton.css';


function CreateTodoButtom(props){
    const onClickButton = (msg) => {
        alert(msg);
    }
    return(
        <button 
        className="CreateTodoButton"
        onClick={() => onClickButton('Aquí debería ir el modal')}
        >
            +
        </button>
    );
}

export { CreateTodoButtom};