import AppButton from './AppButton';
import AppBlock from './AppBlock';

function AppApplicationsList(props) {
    const applications = props.applications;

    function saveLocal(application) {
        localStorage.setItem('my_favorite', JSON.stringify(application));
    }

    function issetFavorite() {
        return localStorage.getItem('my_favorite') ? JSON.parse(localStorage.getItem('my_favorite')) : null;
    }

    function checkFavorite(localFavorite, application) {
        return localFavorite.findIndex(elem => elem.id === application.id);
    }

    function addFavorite(application) {
        const localFavorite = issetFavorite();

        if (!localFavorite) return saveLocal([application]);

        if (checkFavorite(localFavorite, application) === -1) {
            localFavorite.push(application);
            saveLocal(localFavorite);
            return;
        }

        alert('Данная вакансия уже добавлена');
    }

    function renderApplications() {
        if (!applications) return (<div>Ничего не найдено</div>)

        return applications.map(application => (
            <li key={application.id} className="applications__item">
                <AppBlock>
                    <div className="applications__item_inner">
                        <h3 className="applications__item_title">
                            {application.name}
                        </h3>
                        <div className="applications__item_description">
                            <p>
                                {application.description}
                            </p>
                        </div>
                        <ul className="applications__item_list">
                            <li className="applications__item_item">
                                Опыт работы (в годах): {application.experience ? application.experience : 'Не указан'}
                            </li>
                            <li className="applications__item_item">
                                Желаемания зарплата (в рублях): {application.price ? application.price : 'Не указано'}
                            </li>
                        </ul>
                        <div className="applications__item_buttons">
                            <AppButton onClick={() => addFavorite(application)}>
                                Добавить
                            </AppButton>
                            <AppButton onClick={() => props.remove(application.id)}>
                                Удалить
                            </AppButton>
                        </div>
                    </div>
                </AppBlock>
            </li>
        ));
    };

    return (
        <ul className="profile__applications_list applications__list">
            {renderApplications()}
        </ul>
    )
}

export default AppApplicationsList;