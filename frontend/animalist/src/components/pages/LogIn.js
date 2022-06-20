import React from 'react'

const LogIn = () => {
    return (
        <React.Fragment>
            <section className="content-container">
                <form>
                    <h2 className="form-spacing">Log in</h2>

                    <div className="form-group form-spacing">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group form-spacing">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <div className="form-group form-spacing">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-dark btn-lg btn-block">Log in</button>
                    <p className="forgot-password text-right">
                        Forgot <a href="/">password?</a>
                    </p>
                </form>
            </section>
        </React.Fragment>
    )
}

export default LogIn;