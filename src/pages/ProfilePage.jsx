import { useParams } from 'react-router-dom';
import AppContainer from '../components/UI/AppContainer';
import AppApplicationsList from '../components/UI/AppApplicationsList';
import { useState } from 'react';

function ProfilePage() {
    const params = useParams();
    const checkMyFavorite = localStorage.getItem('my_favorite') ? JSON.parse(localStorage.getItem('my_favorite')) : "";
    const [applications, setApplications] = useState(checkMyFavorite);

    function removeApplication(id) {
        const applicationsSort = applications.filter(application => application.id !== id);

        localStorage.setItem('my_favorite', JSON.stringify(applicationsSort));

        return setApplications(applicationsSort);
    }

    return (
        <div className="profile">
            <AppContainer>
                <div className="profile__inner">
                    <div className="profile__user">
                        <span>
                            Пользователь ID:
                        </span>
                        <strong>
                            {params.id}
                        </strong>
                    </div>
                    <div className="profile__applications">
                        <div className="profile__applications_title">
                            Избранное
                        </div>
                        <AppApplicationsList applications={applications} remove={removeApplication}></AppApplicationsList>
                    </div>
                </div>
            </AppContainer>
        </div>
    )
}

export default ProfilePage