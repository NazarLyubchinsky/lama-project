import { BsPencilFill } from "react-icons/bs";
import { ImCross } from 'react-icons/im'
import styles from './style.module.scss';


interface PropsProfileChange {
	title: string
	onClick: () => void
	change: boolean
}

const ProfileChange = ({ title, onClick, change }: PropsProfileChange) => {

	return (
		<div className={styles.profile__change}>
			<h3 className={styles.profile__content_title}>{title}</h3>
			<span>
				<span className={styles.profile__content_write} onClick={onClick}>
					{change ? <><ImCross /> Cancel </> : <>
						<BsPencilFill /> Change </>}
				</span>
			</span>
		</div>
	)
}

export default ProfileChange