import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { UserInfo, CreateUser } from '../misc/User';
import { AddUser } from '../misc/AddUser';

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql/', // your GraphQL Server 
});

const SignUp = () => {
    return (
        <React.Fragment>
            <ApolloProvider client={client}>
                <div style={{
                backgroundColor: '#00000008',
                display: 'flex',
                justifyContent:'center',
                alignItems:'center',
                height: '100vh',
                flexDirection: 'column',
                }}>
                    <UserInfo />
                <CreateUser />
                </div>
            </ApolloProvider>

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