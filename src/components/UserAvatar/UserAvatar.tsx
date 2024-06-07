import Image from 'next/image'
import React from 'react'
import styles from './style.module.scss'


interface UserAvatarProps {
	img: string | undefined
	width?: number
	height?: number
}
export const UserAvatar = async ({ img, width = 50, height = 50 }: UserAvatarProps) => {
	return (
		<Image
			className={styles.avatar}
			src={img ? `${img}` : "/noavatar.png"}
			alt={'user avatar'}
			width={width}
			height={height}
		/>
	)
}
