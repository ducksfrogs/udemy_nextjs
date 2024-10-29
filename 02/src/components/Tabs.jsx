
export default function Tabs ({ children, buttons, buttonsContainer = 'menu' }) {

    const ButtonsConteiner = buttonsContainer;

    return <>
        <ButtonsConteiner> {buttons} </ButtonsConteiner>

        {children}
    
    </>
}