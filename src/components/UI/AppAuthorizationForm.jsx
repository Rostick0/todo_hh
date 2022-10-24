import { formPreventDefault } from './../../global/functions/form';
import AppBlock from './AppBlock';

function AppAuthorizationForm(props) {
    return (
        <form className="authorization__form" onSubmit={formPreventDefault}>
            <AppBlock>
                <div className="authorization__form_inner">
                    {props.children}
                </div>
            </AppBlock>
        </form>
    )
}

export default AppAuthorizationForm;