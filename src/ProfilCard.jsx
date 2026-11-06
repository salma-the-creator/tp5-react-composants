export function ProfilCard(props) {
    return (
        <>
            <h2>{props.Name}</h2>
            <p>Speciality: {props.speciality}</p>
            <p>Description: {props.description}</p>
        
        </>
        
    );
}

export default ProfilCard;