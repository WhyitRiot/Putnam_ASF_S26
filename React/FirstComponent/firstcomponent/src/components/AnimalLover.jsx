import {listItems} from "../utils/data.jsx";

const AnimalLover = (props) =>{
    return(
        <>
            <ul>
                {listItems(props.animalArray)}
            </ul>
        </>
    )
}


export default AnimalLover;