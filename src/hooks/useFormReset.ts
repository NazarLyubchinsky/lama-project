import { useRef, useEffect } from 'react';
interface FormStateProps {
	error: string | undefined;
}

const useFormReset = (state: FormStateProps | undefined) => {
	const formRef = useRef<HTMLFormElement>(null);


	useEffect(() => {
		if (formRef.current && state === undefined) {
			formRef.current.reset();
		}
	}, [state]);

	return formRef;
};

export { useFormReset };