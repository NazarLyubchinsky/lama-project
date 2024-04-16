"use client"
import React from 'react'
// loader
import LoadingOverlay from 'react-loading-overlay-nextgen';
// import clx from 'classnames'

interface PreloaderProps {
	className?: string
}

const Preloader = ({ className }: PreloaderProps) => {

	return (
		<div className={className} style={{
			padding: '50px',
			height: 'calc(100vh - 178px)',
			// backgroundColor: '#24273f',
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