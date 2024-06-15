"use client"
import React from 'react'
import LoadingOverlay from 'react-loading-overlay-nextgen';

interface PreloaderProps {
	className?: string
}

const Preloader = ({ className }: PreloaderProps) => {

	return (
		<div className={className} style={{
			padding: '50px',
			height: 'calc(100vh - 178px)',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		}}>
			<LoadingOverlay

				styles={{
					overlay: (base) => ({
						...base,
						position: 'unset',
						backgroundColor: 'unset',
						display: 'flex',
						alignItems: 'center'
					}),

				}}
				spinner
				text='Loading...'
				active
			/>

		</div>
	)
}

export default Preloader