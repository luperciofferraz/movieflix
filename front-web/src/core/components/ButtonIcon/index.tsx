import './styles.scss';
import { ReactComponent as ArrowIcon } from '../../assets/images/arrow.svg';

type Props = {

    text: string;

}

const ButtonIcon = ({ text }: Props) => (

    <div className="default-button navbar-buttons-icons-color">
        <button className="btn-icon navbar-buttons-icons-color">
            <h5>{text}</h5>
        </button>
        <div className="btn-icon-content">
            <ArrowIcon data-testid="arrow-icon" />        
        </div>
    </div>
);

export default ButtonIcon;