import { useTodoContext } from "@/context/useTodoContext";
import { BsPencilFill } from "react-icons/bs";
import { ImCross } from 'react-icons/im'

interface PropsProfileChange {
	title: string
	onClick: () => void
	change: boolean
}

const ProfileChange = ({ title, onClick, change }: PropsProfileChange) => {
	return (
		<div className="profile__change">
			<h3 className='profile__content-title'>{title}</h3>
			<span>
				<span className='profile__content-write' onClick={onClick}>
					{change ? <><ImCross /> Cancel </> : <>
						<BsPencilFill /> Change </>}
				</span>
			</span>
		</div>
	)
}

export default ProfileChange