import AppButton from '../components/UI/AppButton';
import AppContainer from '../components/UI/AppContainer';
import AppInput from '../components/UI/AppInput';
import AppAuthorizationForm from '../components/UI/AppAuthorizationForm';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function log() {
        const erros = [];

        if (email.length < 5) {
            erros.push('Почта меньше 5 символов');
        }

        if (password !== '12345') {
            erros.push('Попробуйте ввести пароль 12345')
        }

        if (erros[0]) {
            return alert(erros[0]);
        }

        alert(`Вы успешно вошли`);
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
                    </div>
                    <div className="authorization__form_buttons">
                        <AppButton onClick={log}>
                            Войти
                        </AppButton>
                        <Link className='button' to="/registration">
                            Зарегистрироваться
                        </Link>
                    </div>
                </AppAuthorizationForm>
            </AppContainer>
        </div>
    )
}

export default LoginPage