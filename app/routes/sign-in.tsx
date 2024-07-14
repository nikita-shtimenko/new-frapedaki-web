import { Form, useActionData, useNavigation } from "@remix-run/react";
import { LoaderCircleIcon } from "lucide-react";
import InputPhoneNumber from "~/components/input-phone-number";
import { Button } from "~/components/ui/button";
import {
	ErrorMessage,
	Field,
	FieldGroup,
	Fieldset,
	Label,
} from "~/components/ui/fieldset";
import { Link } from "~/components/ui/link";
import { z } from "zod";
import { isValidPhoneNumber, parsePhoneNumber } from "libphonenumber-js";
import { parseWithZod } from "@conform-to/zod";
import { json, redirect, type ActionFunctionArgs } from "@remix-run/node";
import { useForm } from "@conform-to/react";

const schema = z.object({
	phoneNumber: z
		.string({
			required_error: "שדה של מספר טלפון לא יכול להיות ריק",
		})
		.refine(isValidPhoneNumber, "מספר טלפון לא תקין")
		.transform((value) =>
			parsePhoneNumber(value, { defaultCountry: "IL" }).number.toString(),
		),
});

export async function action({ request }: ActionFunctionArgs) {
	const formData = await request.formData();
	const submission = parseWithZod(formData, { schema });

	if (submission.status !== "success") {
		return json(submission.reply());
	}

	const { phoneNumber } = submission.value;
	const { serverClient, headers } = getDatabaseServerClientWithHeaders(request);

	const { error } = await serverClient.auth.signInWithOtp({
		phone: phoneNumber,
		options: {
			channel: "sms",
		},
	});

	if (error) {
		throw error;
	}

	return redirect(`/verification/${phoneNumber}`, { headers });
}

export default function PageSignIn() {
	const actionData = useActionData<typeof action>();

	const [form, fields] = useForm({
		lastResult: actionData,
		onValidate({ formData }) {
			return parseWithZod(formData, { schema });
		},
		shouldValidate: "onBlur",
		shouldRevalidate: "onInput",
	});

	const navigation = useNavigation();
	const busy = navigation.state !== "idle";

	return (
		<div className="flex min-h-full flex-1 bg-white">
			<div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
				<div className="mx-auto w-full max-w-sm lg:w-96">
					<div>
						<h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
							כניסה לחשבון
						</h2>
						<p className="mt-2 text-sm leading-6 text-gray-500">
							עוד לא נרשמתם?{" "}
							<Link
								href="/sign-up"
								className="font-semibold text-blue-600 hover:text-blue-500"
							>
								להירשם
							</Link>
						</p>
					</div>

					<div className="mt-10">
						<Form
							method="POST"
							id={form.id}
							onSubmit={form.onSubmit}
							noValidate
						>
							<Fieldset>
								<FieldGroup>
									<Field>
										<Label htmlFor="phone">מספר טלפון</Label>
										<InputPhoneNumber
											name={fields.phoneNumber.name}
											key={fields.phoneNumber.key}
											defaultValue={fields.phoneNumber.initialValue}
										/>
										{fields.phoneNumber.errors && (
											<ErrorMessage>
												{fields.phoneNumber.errors[0]}
											</ErrorMessage>
										)}
									</Field>
								</FieldGroup>
							</Fieldset>
							<Button
								type="submit"
								className="w-full mt-6"
								color="blue"
								disabled={busy}
							>
								{busy && <LoaderCircleIcon className="animate-spin" />}
								להיכנס לחשבון
							</Button>
						</Form>
					</div>
				</div>
			</div>
			<div className="relative hidden w-0 flex-1 lg:block">
				<img
					className="absolute inset-0 h-full w-full object-cover"
					src="/images/coffee_green.jpg"
					alt=""
				/>
			</div>
		</div>
	);
}
