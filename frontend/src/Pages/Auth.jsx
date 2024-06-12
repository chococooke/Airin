const Auth = () => {
    return (
        <>
            <form className="form">
                <div className="form__control">
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