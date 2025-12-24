'use client';

import { Button } from '@/components/ui/button';
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from '@/components/ui/input-group';
import { Lock, MailIcon, UserIcon } from 'lucide-react';
import Link from 'next/link';
import { GithubIcon, GoogleIcon } from '@/components/icons';
import { toast } from 'react-toastify';
import { Field, FieldError, FieldGroup } from '@/components/ui/field';

import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema, RegisterSchemaType } from '@/lib/zodSchema';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { signUp } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

export function AuthRegister() {
	const router = useRouter();
	const registerForm = useForm<RegisterSchemaType>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			name: '',
			email: '',
			password: '',
		},
	});

	async function onRegister(values: RegisterSchemaType) {
		try {
			const result = await signUp.email({
				name: values.name,
				email: values.email,
				password: values.password,
			});

			if (result.error) {
				toast.error(result.error.message || 'Sign up failed');
			} else {
				toast.success('Account Created Successfull');
				router.push('/admin');
			}
		} catch (error) {
			console.error('Form submission error', error);
			toast.error('Failed to submit the form. Please try again.');
		}
	}
	return (
		<Card>
			<CardHeader>
				<CardTitle className='font-bold text-2xl uppercase'>
					Join Now!
				</CardTitle>
				<CardDescription className='text-base text-muted-foreground'>
					Create your blogy account.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form
					id='register-form'
					onSubmit={registerForm.handleSubmit(onRegister)}
				>
					<FieldGroup>
						<Controller
							name='name'
							control={registerForm.control}
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<InputGroup>
										<InputGroupInput
											{...field}
											id='lname'
											aria-invalid={fieldState.invalid}
											type='lname'
											placeholder='Enter your full name'
										/>
										<InputGroupAddon>
											<UserIcon />
										</InputGroupAddon>
									</InputGroup>
									{fieldState.invalid && (
										<FieldError errors={[fieldState.error]} />
									)}
								</Field>
							)}
						/>

						<Controller
							name='email'
							control={registerForm.control}
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<InputGroup>
										<InputGroupInput
											{...field}
											id='email'
											aria-invalid={fieldState.invalid}
											type='email'
											placeholder='Enter your email'
										/>
										<InputGroupAddon>
											<MailIcon />
										</InputGroupAddon>
									</InputGroup>
									{fieldState.invalid && (
										<FieldError errors={[fieldState.error]} />
									)}
								</Field>
							)}
						/>
						<Controller
							name='password'
							control={registerForm.control}
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<InputGroup>
										<InputGroupInput
											{...field}
											id='password'
											aria-invalid={fieldState.invalid}
											type='password'
											placeholder='Enter your password'
										/>
										<InputGroupAddon>
											<Lock />
										</InputGroupAddon>
									</InputGroup>
									{fieldState.invalid && (
										<FieldError errors={[fieldState.error]} />
									)}
								</Field>
							)}
						/>
						<Button className='w-full rounded-sm' type='submit'>
							Register
						</Button>
					</FieldGroup>
				</form>
				<div className='flex w-full items-center justify-center'>
					<div className='h-px w-full bg-border' />
					<div className='px-2 py-4 text-muted-foreground text-xs text-nowrap'>
						OR CONTINUE WITH:
					</div>
					<div className='h-px w-full bg-border' />
				</div>

				<div className='flex flex-row gap-2'>
					<div className='w-full'>
						<Button
							className='w-full cursor-pointer rounded-sm'
							size='lg'
							variant={'secondary'}
						>
							<GoogleIcon />
							Google
						</Button>
					</div>
					<div className='w-full'>
						<Button
							className='w-full cursor-pointer rounded-sm'
							size='lg'
							variant={'secondary'}
						>
							<GithubIcon />
							GitHub
						</Button>
					</div>
				</div>
			</CardContent>

			<CardFooter>
				<p className='text-muted-foreground text-xs'>
					I already have an account{' '}
					<Link
						className='underline underline-offset-4 hover:text-primary'
						href='/auth/login'
					>
						here
					</Link>{' '}
					to login.
				</p>
			</CardFooter>
		</Card>
	);
}
