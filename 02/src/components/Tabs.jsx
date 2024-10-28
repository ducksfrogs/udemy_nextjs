
export default function Tabs ({ children, buttons, buttonsContainer }) {

    const ButtonsConteiner = buttonsContainer;

    return <>
        <ButtonsConteiner> {buttons} </ButtonsConteiner>

        {children}
    
    </>
}