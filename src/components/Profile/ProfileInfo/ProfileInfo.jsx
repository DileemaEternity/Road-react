import Preloader from '../../Preloader/Preloader';
import ps from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return (
            <Preloader />
        )
    }

    return (
        <div>
            <div>
                <img alt='rere' className={ps.content_img} src='../kartinki/Nachalo.jpeg' />
            </div>
            <div className={ps.description_block}>
                <img alt="rere" className={ps.eternity_img} src='../kartinki/Eternity.jpg' />
                <img alt='s' src={props.profile.photos.large} />
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo;