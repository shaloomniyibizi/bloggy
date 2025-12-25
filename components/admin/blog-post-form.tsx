'use client';

import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { blogPostSchema, BlogPostSchemaType } from '@/lib/zodSchema';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from '@/components/ui/input-group';
import { Field, FieldError, FieldGroup } from '@/components/ui/field';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { toast } from 'react-toastify';
import { Book, Image as ImageIcon, Type } from 'lucide-react';

export function BlogPostForm() {
	const form = useForm<BlogPostSchemaType>({
		resolver: zodResolver(blogPostSchema),
		defaultValues: {
			title: '',
			image: '',
			description: '',
			category: '',
			status: 'Draft',
			readTime: '',
			views: '',
		},
	});

	const onSubmit = (values: BlogPostSchemaType) => {
		// Here you would typically send the data to your backend (e.g., Convex)
		console.log(values);
		toast.success('Blog post submitted successfully!');
		form.reset();
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle className='font-bold text-2xl uppercase'>
					Create New Blog Post
				</CardTitle>
				<CardDescription className='text-base text-muted-foreground'>
					Fill out the form to create a new blog entry.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
					<FieldGroup>
						<Controller
							name='title'
							control={form.control}
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<InputGroup>
										<InputGroupInput
											{...field}
											id='title'
											aria-invalid={fieldState.invalid}
											placeholder='Blog Post Title'
										/>
										<InputGroupAddon>
											<Type />
										</InputGroupAddon>
									</InputGroup>
									{fieldState.invalid && (
										<FieldError errors={[fieldState.error]} />
									)}
								</Field>
							)}
						/>

						<Controller
							name='image'
							control={form.control}
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<InputGroup>
										<InputGroupInput
											{...field}
											id='image'
											aria-invalid={fieldState.invalid}
											placeholder='Image URL'
										/>
										<InputGroupAddon>
											<ImageIcon />
										</InputGroupAddon>
									</InputGroup>
									{fieldState.invalid && (
										<FieldError errors={[fieldState.error]} />
									)}
								</Field>
							)}
						/>

						<Controller
							name='description'
							control={form.control}
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<Textarea
										{...field}
										id='description'
										aria-invalid={fieldState.invalid}
										placeholder='Blog Post Description'
										rows={5}
									/>
									{fieldState.invalid && (
										<FieldError errors={[fieldState.error]} />
									)}
								</Field>
							)}
						/>

						<Controller
							name='category'
							control={form.control}
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<InputGroup>
										<InputGroupInput
											{...field}
											id='category'
											aria-invalid={fieldState.invalid}
											placeholder='Category'
										/>
										<InputGroupAddon>
											<Book />
										</InputGroupAddon>
									</InputGroup>
									{fieldState.invalid && (
										<FieldError errors={[fieldState.error]} />
									)}
								</Field>
							)}
						/>

						<Controller
							name='status'
							control={form.control}
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<Select onValueChange={field.onChange} value={field.value}>
										<SelectTrigger aria-invalid={fieldState.invalid}>
											<SelectValue placeholder='Select Status' />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value='Published'>Published</SelectItem>
											<SelectItem value='Draft'>Draft</SelectItem>
											<SelectItem value='Archived'>Archived</SelectItem>
										</SelectContent>
									</Select>
									{fieldState.invalid && (
										<FieldError errors={[fieldState.error]} />
									)}
								</Field>
							)}
						/>

						<Button type='submit' className='w-full'>
							Create Blog Post
						</Button>
					</FieldGroup>
				</form>
			</CardContent>
		</Card>
	);
}
