import AppContainer from '../components/UI/AppContainer';
import AppApplicationsList from '../components/UI/AppApplicationsList';
import AppInput from '../components/UI/AppInput';
import AppFilter from '../components/UI/AppFilter';
import { useMemo, useState } from 'react';
import AppCreate from '../components/UI/AppCreate';

function MainPage() {
    const filterItems = [
        {
            name: 'По названию',
            forHtml: 'name'
        },
        {
            name: 'По цене',
            forHtml: 'price'
        },
        {
            name: 'По опыту',
            forHtml: 'experience'
        }
    ];

    const [applications, setApplications] = useState([
        { id: 1, name: 'test', description: 'test', price: 30, experience: 1 },
        { id: 2, name: 'test 2', description: 'test 2', price: 301, experience: 2 },
        { id: 3, name: 'z test 3', description: 'test 3', price: 32, experience: 1 }
    ]);
    const [applicationSearch, setApplicationSearch] = useState('');
    const [sortType, setSortType] = useState('name');
    const sortApplications = useMemo(() => {
        if (sortType) {
            return [...applications].sort((a, b) => a[sortType] - b[sortType]);
        }

        return applications;

    }, [sortType, applications]);
    const applicationSortAndSearch = useMemo(() => {
        return ApplicationSearch(sortApplications, applicationSearch)
    }, [applicationSearch, sortApplications])
    function ApplicationSearch(applications, applicationSearch) {
        const value = applicationSearch.trim().toLowerCase();

        return applications.filter(application => {
            const applicationName = application.name.trim().toLowerCase();

            return applicationName.includes(value);
        });
    }
    function createApplication(newApplication) {
        setApplications([...applications, newApplication]);
    }
    function removeApplication(id) {
        return setApplications(applications.filter(application => application.id !== id));
    }

    return (
        <div className='main'>
            <AppContainer>
                <div className="main__inner">
                    <AppCreate create={createApplication} />
                    <div className="main__search">
                        <div className="main__search_title">
                            Поиск
                        </div>
                        <AppInput styleName="main__search_input" onChange={event => setApplicationSearch(event.target.value)} />
                    </div>
                    <AppFilter items={filterItems} typeSort={setSortType} />
                    <div className="main__list">
                        <AppApplicationsList applications={applicationSortAndSearch} remove={removeApplication}></AppApplicationsList>
                    </div>
                </div>
            </AppContainer>
        </div>
    )
}

export default MainPage;