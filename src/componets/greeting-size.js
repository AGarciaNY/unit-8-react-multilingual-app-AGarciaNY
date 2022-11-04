import Button  from "./button"
export default function GreetingSize(props) { 
    return (
        <div id="add-buttons">
            <Button val='-' myFunction={props.subToSize} />
            <Button val='+' myFunction={props.addToSize} />
        </div>
    )
}