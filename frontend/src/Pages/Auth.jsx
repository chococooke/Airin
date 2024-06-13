const Auth = () => {
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

                    <button
                        type='submit'
                        className="btn">
                        Submit
                    </button>
                </div>
            </form>
        </>
    )
}

export default Auth;