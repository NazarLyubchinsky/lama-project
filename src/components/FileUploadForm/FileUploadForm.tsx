// 'use client'
// import { editUserImage } from "@/lib/action";
// import { userProps } from "@/lib/models";
// import { useFormState } from "react-dom";
// import styles from './style.module.scss'
// interface PropsFileUploadForm {
// 	user: userProps
// }
// const FileUploadForm = ({ user }: PropsFileUploadForm) => {
// 	const [stateUser, formAction] = useFormState(editUserImage, undefined);
// 	return (
// 		// <form action={formAction}>
// 		<div>
// 			<input type="hidden" name="id" value={user._id} />
// 			<label htmlFor="file-upload" className={styles.fileUploadLabel}>
// 				Upload Images
// 				<input id="file-upload" style={{ display: 'none' }} type="file" name="img"
// 					onChange={async (e) => {
// 					const file = e.target.files?.[0];
// 					if (!file) return;
// 					const formData = new FormData();
// 					formData.append('img', file);
// 					formData.append('id', user._id);
// 					await editUserImage(formData);
// 					}}
// 				/>
// 			</label>
// 		</div>
// 		// </form>
// 	)
// }

// export default FileUploadForm



'use client'
import { editUserImage } from "@/lib/action";
import { userProps } from "@/lib/models";
import styles from './style.module.scss'
interface PropsFileUploadForm {
	user: userProps
}
const FileUploadForm = ({ user }: PropsFileUploadForm) => {
	const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const img = e.target.files?.[0];
		if (!img) return;
		const validImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
		if (!validImageTypes.includes(img.type)) {
			alert('Invalid file type. Please upload a supported image format.');
			return;
		}

		const formData = new FormData();
		formData.append('img', img);
		formData.append('id', user._id);
		await editUserImage(formData);
	};
	return (
		<div>
			<input type="hidden" name="id" value={user._id} />
			<label htmlFor="file-upload" className={styles.fileUploadLabel}>
				Upload Images
				<input id="file-upload" style={{ display: 'none' }} type="file" name="img"
					onChange={handleFileUpload}
				/>
			</label>
		</div>
	)
}

export default FileUploadForm