import Card from "./Card";
import './card.css';
import faker from "@faker-js/faker"; // Correct import for faker
import staffList from "./staffList";
 
function cardcomponent(staff) {
    return (
        <Card
            key ={staff.key}
            image ={staff.image}
            name= {staff.name}
            position ={staff.position}
        />)
}

function CardList() {
    return (
        <div className="row">
            {staffList.map(cardcomponent)}
        </div>
    )
}

export default CardList // Don't forget to export the component