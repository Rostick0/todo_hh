import AppButton from '../components/UI/AppButton';
import AppContainer from '../components/UI/AppContainer';
import AppInput from '../components/UI/AppInput';
import AppAuthorizationForm from '../components/UI/AppAuthorizationForm';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { validate } from 'react-email-validator';

function RegistrationPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setpasswordConfirm] = useState("");

    function registration() {
        const erros = [];

        if (email.length < 5) {
            erros.push('Почта меньше 5 символов');
        }

        if (password.length < 8) {
            erros.push('Пароли меньше 8 символов');
        }

        if (!validate(email)) {
            erros.push('Почта невалидная');
        }

        if (password !== passwordConfirm) {
            erros.push('Пароли не совпадают');
        }

        if (erros[0]) {
            return alert(erros[0]);
        }

        alert(`Успех, скоро придет код на почту ${email}`);
        alert('Шучу, ничего не придет, т.к. бэкенд отсуствует');
    }

    return (
        <div className="authorization">
            <AppContainer>
                <AppAuthorizationForm>
                    <div className="authorization__form__inputs">
                        <div className="authorization__form_block-input">
                            <label htmlFor="Email">Email</label>
                            <AppInput onChange={event => setEmail(event.target.value)} id="Email" type="email"></AppInput>
                        </div>
                        <div className="authorization__form_block-input">
                            <label htmlFor="password">Пароль</label>
                            <AppInput onChange={event => setPassword(event.target.value)} id="password" type="password"></AppInput>
                        </div>
                        <div className="authorization__form_block-input">
                            <label htmlFor="password">Подтвердите пароль</label>
                            <AppInput onChange={event => setpasswordConfirm(event.target.value)} id="password_confirm" type="password_confirm"></AppInput>
                        </div>
                    </div>
                    <div className="authorization__form_buttons">
                        <AppButton onClick={registration}>
                            Зарегистрироваться
                        </AppButton>
                        <Link className='button' to="/login">
                            Войти
                        </Link>
                    </div>
                </AppAuthorizationForm>
            </AppContainer>
        </div>
    )
}

export default RegistrationPage