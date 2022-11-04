import Button from './button'
export default function LanguageChangeButton(props) {
    return (
        <div >
            <Button val="English" myFunction={() => { props.changeLanguage("English") }} />
            <Button val="chinese" myFunction={() => { props.changeLanguage("Chinese") }} />
            <Button val="Spanish" myFunction={() => { props.changeLanguage("Spanish") }} />
            <Button val="Haitian" myFunction={() => { props.changeLanguage("Haitian") }} />
            <Button val="Poetuguese" myFunction={() => { props.changeLanguage("Portuguese") }} />
        </div>
    )
}