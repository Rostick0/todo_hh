import { checkStyleName } from '../../global/functions/style';

function AppBlock(props) {
    return (
        <div className={`block${checkStyleName(props.styleName)}`}>
            {props.children}
        </div>
    )
}

export default AppBlock;