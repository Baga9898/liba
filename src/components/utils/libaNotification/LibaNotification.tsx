import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import './libaNotification.scss';

type LibaNotificationType = {
    closeHandler: () => void,
    status: string,
    children: React.ReactNode,
}

const LibaNotification: React.FC<LibaNotificationType> = ({ closeHandler, status, children }) => {
    return (
        <div className='libaNotification-wrapper'>
            <div className='libaNotification__header'>
                <div className='libaNotification__header_close' onClick={closeHandler}><FontAwesomeIcon icon={faTimes}/></div>
            </div>
            <div className={`libaNotification__body ${status}`}>
                <FontAwesomeIcon icon={faInfoCircle} className='libaNotification__body_informationIcon'/>
                {children}
            </div>
        </div>
    );
}

export default LibaNotification;