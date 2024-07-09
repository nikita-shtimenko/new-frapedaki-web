import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/utils/tailwind";

const alertVariants = cva(
	"relative w-full rounded-none border p-4 [&>svg~*]:pr-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:right-4 [&>svg]:top-4 [&>svg]:text-zinc-100",
	{
		variants: {
			variant: {
				default: "bg-blue-600 text-zinc-100",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

const Alert = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
	<div
		ref={ref}
		role="alert"
		className={cn(alertVariants({ variant }), className)}
		{...props}
	/>
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
	<h5
		ref={ref}
		className={cn(
			"mb-1 font-mono font-bold leading-none tracking-tight",
			className,
		)}
		{...props}
	/>
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn(
			"font-mono font-normal text-sm [&_p]:leading-relaxed",
			className,
		)}
		{...props}
	/>
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
