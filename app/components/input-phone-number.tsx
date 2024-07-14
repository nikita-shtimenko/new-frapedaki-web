import { useState } from "react";
import { Input } from "~/components/ui/input";
import { usePhoneInput } from "react-international-phone";

interface InputPhoneNumberProps {
	name: string;
	key: string | undefined;
	defaultValue: string | number | readonly string[] | undefined;
}

export default function InputPhoneNumber({
	name,
	key,
	defaultValue,
}: InputPhoneNumberProps) {
	const [phoneNumber, setPhoneNumber] = useState("");

	const { handlePhoneValueChange } = usePhoneInput({
		defaultCountry: "il",
		forceDialCode: true,
		disableCountryGuess: true,
		onChange: ({ inputValue }) => {
			setPhoneNumber(inputValue);
		},
	});

	return (
		<Input
			id="phone"
			name={name}
			key={key}
			defaultValue={defaultValue}
			type="tel"
			autoComplete="tel"
			value={phoneNumber}
			onChange={(event) => handlePhoneValueChange(event)}
			required
		/>
	);
}
