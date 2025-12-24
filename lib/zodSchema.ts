import { z } from 'zod';

export const loginSchema = z.object({
	email: z.string().email({
		message: 'Invalid email address',
	}),
	password: z.string().min(2, {
		message: 'Password must be at least 2 characters long',
	}),
});
export const registerSchema = z.object({
	name: z.string().min(3, {
		message: 'Last Name must be at least 3 characters long',
	}),
	email: z.string().email({
		message: 'Invalid email address',
	}),
	password: z
		.string()
		.min(8, {
			message: 'Password must be at least 8 characters long',
		})
		.max(32, {
			message: 'Password must be at most 32 characters long',
		})
		// regex to check if password contains at least one uppercase letter
		.regex(/^(?=.*[A-Z]).+$/, {
			message: 'Password must contain at least one uppercase letter',
		})
		// regex to check if password contains at least one lowercase letter
		.regex(/^(?=.*[a-z]).+$/, {
			message: 'Password must contain at least one lowercase letter',
		})
		// regex to check if password contains at least one number
		.regex(/^(?=.*\d).+$/, {
			message: 'Password must contain at least one number',
		})
		// regex to check if password contains at least one special character
		.regex(/^(?=.*[!@#$%^&*]).+$/, {
			message: 'Password must contain at least one special character',
		}),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
export type RegisterSchemaType = z.infer<typeof registerSchema>;
