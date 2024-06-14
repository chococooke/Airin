import { useState } from "react";

const Auth = () => {
    const formTypes = Object.freeze({
        LOGIN: 'login',
        REGISTER: 'register'
    });

    const [formType, setFormType] = useState(formTypes.LOGIN);

    const toggleFormType = (e) => {
        e.preventDefault();

        formType === formTypes.LOGIN
            ? setFormType(formTypes.REGISTER)
            : setFormType(formTypes.LOGIN)
    }

    // handleSubmit
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Auth initiated');
    }

    return (
        <>
            <form className="form">
                <div className="form__control">
                    <h1 className="form__title">Auth Form</h1>
                    <input
                        placeholder="Username"
                        type="text"
                        className="form__input"
                    />

                    <input
                        placeholder="Password"
                        type="password"
                        className="form__input"
                    />

                    <button onClick={(e) => toggleFormType(e)}>
                        {formType === formTypes.LOGIN
                            ? 'Register Instead'
                            : 'Log in instead'}
                    </button>

                    <button
                        type='submit'
                        className="btn"
                        onClick={(e) => handleSubmit(e)}
                    >
                        {formType === formTypes.LOGIN
                            ? `login`
                            : 'register'}
                    </button>
                </div>
            </form>
        </>
    )
}

export default Auth;