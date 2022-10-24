import { checkStyleName } from '../../global/functions/style';

function AppContainer(props) {
    return (
        <div className={`container${checkStyleName(props.styleName)}`}>
            {props.children}
        </div>
    )
}

export default AppContainer;