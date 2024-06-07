import { useEffect } from 'react';
import { toast } from 'react-toastify';

interface PropsFormToast {
	success?: string;
	error?: string;
}
const useFormToast = (formState: PropsFormToast | undefined) => {

	useEffect(() => {
		if (formState?.success) {
			toast.success(formState.success, {
				position: "bottom-right",
				containerId: "updatedUser"
			});
		} else if (formState?.error) {
			toast.error(formState.error, {
				position: "bottom-right",
				containerId: "updatedUser"
			});
		}

	}, [formState]);

}
export default useFormToast
