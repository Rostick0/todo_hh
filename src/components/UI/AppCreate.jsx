import AppInput from './AppInput';
import AppButton from './AppButton';
import { useState } from 'react';

function AppCreate(props) {
    const [newApplication, setNewApplication] = useState({
        name: '',
        description: '',
        experience: '',
        price: '',
    });

    const addNewApplication = () => {
        const erros = [];

        if (newApplication.name.length < 3) {
            erros.push('Название должности меньше 3 символов')
        }

        if (newApplication.description.length < 1) {
            erros.push('Расскажите в описании про то, что вы умеете')
        }

        if (+newApplication.experience < 0) {
            erros.push('Опыт работы не может быть отрицательным')
        }

        if (+newApplication.price < 0) {
            erros.push('Зарплата не может быть отрицательной')
        }

        if (erros[0]) {
            alert(erros[0]);
            return;
        }

        const result = {
            id: Date.now(), ...newApplication
        }

        props.create(result);
    }

    return (
        <div className="main__create create">
            <div className="create__title">
                Создание
            </div>
            <div className="create__inputs">
                <AppInput placeholder="Название вакансии" onChange={e => setNewApplication({...newApplication, name: e.target.value})} />
                <AppInput placeholder="Описание" onChange={e => setNewApplication({...newApplication, description: e.target.value})} />
                <AppInput type="number" placeholder="Опыт (в годах)" onChange={e => setNewApplication({...newApplication, experience: e.target.value})} />
                <AppInput type="number" placeholder="Зарплата (в рублях)" onChange={e => setNewApplication({...newApplication, price: e.target.value})} />
            </div>
            <AppButton onClick={addNewApplication}>
                Создать
            </AppButton>
        </div>
    )
}

export default AppCreate;