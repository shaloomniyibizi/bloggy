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

export const blogPostSchema = z.object({
	title: z.string().min(1, { message: 'Title is required' }),
	image: z.string().url({ message: 'Image must be a valid URL' }),
	description: z.string().min(1, { message: 'Description is required' }),
	category: z.string().min(1, { message: 'Category is required' }),
	status: z.enum(['Published', 'Draft', 'Archived'], {
		errorMap: () => ({ message: 'Please select a valid status' }),
	}),
	readTime: z.string().optional(),
	views: z.string().optional(),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
export type RegisterSchemaType = z.infer<typeof registerSchema>;
export type BlogPostSchemaType = z.infer<typeof blogPostSchema>;