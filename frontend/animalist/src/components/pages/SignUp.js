import React from 'react'

const SignUp = () => {
    return (
        <React.Fragment>
            <section className="content-container">
                <form>
                    <h2 className="form-spacing">Sign up</h2>

                    <div className="form-group form-spacing">
                        <label>Username</label>
                        <input type="text" className="form-control" placeholder="Enter username" />
                    </div>

                    <div className="form-group form-spacing">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group form-spacing">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                    <p className="forgot-password text-right">
                        Already registered? <a href="/LogIn">Log in</a>
                    </p>
                </form>
            </section>
        </React.Fragment>
    )
}

export default SignUp;