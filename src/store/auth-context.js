import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
	isLoggedIn: false,
	onLogout: () => {},
	onLogin: (email, password) =>{}
});


export const AuthContextProvider = (props) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const storedLogInInfo = localStorage.getItem('isLoggedIn');

	    if (storedLogInInfo === '1') {
	      setIsLoggedIn(true)
	    }
	}, []);
	// It will only executes once at the creation of component and wont run when state update occur
	// Beacuse we not giving any dependencies
	
	const loginHandler = (email, password) => {
		// We should of course check email and password
	    // But it's just a dummy/ demo anyways
	    localStorage.setItem('isLoggedIn', 1);
	    setIsLoggedIn(true);
	};

	const logoutHandler = () => {
	    localStorage.removeItem('isLoggedIn');
	    setIsLoggedIn(false);
	};

	return (
		<AuthContext.Provider
			value={{
				isLoggedIn: isLoggedIn,
				onLogout: logoutHandler,
				onLogin: loginHandler
			}}
		>
			{ props.children }
		</AuthContext.Provider>
	);
}

export default AuthContext;