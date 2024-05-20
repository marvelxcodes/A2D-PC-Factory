import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

const Button = ({
	className,
	...props
}: DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>) => {
	return (
		<button
			className={`${className} font-medium w-max bg-amber-500 h-max text-white px-4 py-2 rounded-full hover:bg-amber-600`}
			{...props}
		/>
	);
};

export default Button;
