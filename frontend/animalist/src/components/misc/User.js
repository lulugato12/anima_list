import React, { useEffect } from 'react';
import { Form, Container } from 'react-bootstrap';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import './User.css';

const QUERY_USERS = gql`
	query {
		users {
			id
			username
			email
		}
	}
`;

const CREATE_USER = gql`
	mutation CreateUser(
		$username: String!
		$email: String!
		$password: String!
	) {
		createUser(username: $username, email: $email, password: $password) {
			user {
				id
				username
				email
				password
			}
		}
	}
`;

export function UserInfo() {
	const { data, loading } = useQuery(QUERY_USERS, {
		pollInterval: 500, // refetch the result every 0.5 second
	});

	// should handle loading status
	if (loading) return <p>Loading...</p>;

	return data.users.map(({ id, username, email }) => (
		<div key={id}>
			<p>
				User - {id}: {username} {email}
			</p>
		</div>
	));
}

export function CreateUser() {
	let username, email, password;
	const [createUser, { data, error }] = useMutation(CREATE_USER);
	useEffect(() => {
		console.log(data);
	}, [data]);

	const handleClick = async () => {
    console.log('Clickeando');
		try {
			await createUser({
				variables: {
					username: username.value,
					email: email.value,
					password: password.value,
				},
			});
			window.location.reload();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<form >
				<Container>
					<h1>Sign up</h1>
					<Form className="register-form">
						<Form.Group
							className="mb-3"
							controlId="formBasicUsername"
						>
							<Form.Label>Username</Form.Label>
							<div>
								<input
									className="register-field"
									placeholder="Username"
									ref={(node) => {
										username = node;
									}}
								/>
							</div>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<div>
								<input
									className="register-field"
									placeholder="Email"
									ref={(node) => {
										email = node;
									}}
								/>
							</div>
						</Form.Group>

						<Form.Group
							className="mb-3"
							controlId="formBasicPassword"
						>
							<Form.Label>Password</Form.Label>
							<div>
								<input
									className="register-field"
									placeholder="Password"
									ref={(node) => {
										password = node;
									}}
								/>
							</div>
						</Form.Group>
					</Form>

					<button className="register-button" type='button' onClick={handleClick}>
						Register
					</button>
				</Container>
			</form>
		</div>
	);
}
