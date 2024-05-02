import { createContext } from "react";



export interface ContextProps {
	userChange: boolean,
	setUserChange: (value: boolean) => void
	passwordChange: boolean
	setPasswordChange: (value: boolean) => void

}


export const Context = createContext<ContextProps>({
	userChange: false,
	passwordChange: false,
	setUserChange: () => { },
	setPasswordChange: () => { }
});