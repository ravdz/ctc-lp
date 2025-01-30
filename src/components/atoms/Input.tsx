import { Field, Input, Label, Description } from "@headlessui/react";
import { twMerge } from "tailwind-merge";

const sizes = {
	sm: "px-3 py-2",
	md: "px-8 py-3",
};

type Props = {
	name: string;
	size?: keyof typeof sizes;
	type?: "text" | "email" | "password";
	placeholder?: string;
	label?: string;
	description?: string;
	className?: string;
	defaultValue?: string;
	disabled?: boolean;
};

const CustomInput = ({
	name,
	label,
	size = "sm",
	description,
	type = "text",
	placeholder,
	className = "",
	defaultValue,
	disabled = false,
}: Props) => {
	return (
		<Field className={className} disabled={disabled}>
			{label && (
				<Label className="mb-2 inline-block text-sm text-gray-900 data-[disabled]:opacity-50">
					{label}
				</Label>
			)}
			<Input
				name={name}
				placeholder={placeholder}
				type={type}
				disabled={disabled}
				defaultValue={defaultValue}
				className={twMerge(
					"block w-full rounded-lg border border-gray-300 bg-white text-sm text-gray-900 focus:outline-none data-[disabled]:bg-gray-100 data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-gray-700",
					sizes[size],
				)}
			/>
			{description && (
				<Description className="mt-2 inline-block text-sm text-gray-900 data-[disabled]:opacity-50">
					{description}
				</Description>
			)}
		</Field>
	);
};

export { CustomInput as Input };
