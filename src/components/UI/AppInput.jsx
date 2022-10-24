import { checkStyleName } from '../../global/functions/style';

function AppInput(props) {
    return (
        <input className={`input${checkStyleName(props.styleName)}`} {...props} />
    )
}

export default AppInput;