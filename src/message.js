import "./message.css";
function Message(prop1){
    return(
        <>
        <p>Hey {prop1.name}!</p>
        <p>City {prop1.city}</p>
        </>
    );
}

export default Message;

