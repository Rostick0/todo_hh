import { checkStyleName } from '../../global/functions/style';

function AppButton(props) {
    return (
        <button className={`button${checkStyleName(props.styleName)}`} {...props}>
            {props.children}
        </button>
    )
}

export default AppButton;