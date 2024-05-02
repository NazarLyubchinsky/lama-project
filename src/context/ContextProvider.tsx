"use client"

import React, { useMemo, useState } from "react"

import { Context } from './context'


interface StoreProviderProps {
	children: React.ReactNode;
}

export const ContextProvider: React.FC<StoreProviderProps> = ({ children }) => {
	const [userChange, setUserChange] = useState(false)
	const [passwordChange, setPasswordChange] = useState(false);




	const value =
		useMemo(
			() =>
			({
				userChange, setUserChange, passwordChange, setPasswordChange
			})
			,
			[
				userChange, passwordChange
			]
		);

	return <Context.Provider value={value}>{children}</Context.Provider>;
};