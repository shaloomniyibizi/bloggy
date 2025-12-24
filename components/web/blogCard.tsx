'use client';

import Image from 'next/image';
import { BlogType } from '@/lib/types/convex';
import { useState } from 'react';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, Clock, Calendar } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function BlogCard({ blog }: { blog: BlogType }) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<Card
			className='group relative overflow-hidden border-0 pt-0 shadow-lg hover:shadow-2xl transition-all duration-500'
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<CardHeader className='relative p-0 h-64 overflow-hidden'>
				<Image
					src={blog.image}
					alt={blog.title}
					width={500}
					height={300}
					className={`w-full h-full object-cover transition-transform duration-700 ${
						isHovered ? 'scale-110' : 'scale-100'
					}`}
				/>
				<div className='absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent' />
				<Badge className='absolute top-0 left-0 bg-primary hover:bg-primary/80 text-foreground border-0 px-4 py-1.5 text-xs font-semibold'>
					{blog.category}
				</Badge>
				<div className='absolute bottom-4 left-4 right-4 flex items-center gap-3 text-white/90'>
					<div className='flex items-center gap-1.5 text-sm'>
						<Eye className='w-4 h-4' />
						<span>{blog.views}</span>
					</div>
					<div className='flex items-center gap-1.5 text-sm'>
						<Clock className='w-4 h-4' />
						<span>{blog.readTime}</span>
					</div>
				</div>
			</CardHeader>

			<CardContent className='space-y-4'>
				<CardTitle className='font-bold line-clamp-2 group-hover:text-primary transition-colors duration-300'>
					{blog.title}
				</CardTitle>

				<CardDescription className='text-muted-foreground text-sm line-clamp-3 leading-relaxed'>
					{blog.description}
				</CardDescription>

				<CardFooter className='flex items-center justify-between px-0 border-t'>
					<div className='flex items-center gap-3'>
						<div className='size-8 rounded-full bg-linear-to-br from-primary to-primary/40 flex items-center justify-center text-foreground font-semibold text-sm'>
							{blog.userName.charAt(0)}
						</div>
						<div>
							<p className='text-sm font-semibold text-foreground/80'>
								{blog.userName}
							</p>
							<div className='flex items-center gap-1.5 text-xs italic text-muted-foreground'>
								<Calendar className='w-3 h-3' />
								<span>
									{new Date(blog.date).toLocaleDateString('en-RW', {
										month: 'short',
										day: 'numeric',
										year: 'numeric',
									})}
								</span>
							</div>
						</div>
					</div>

					<Link
						href={`/blog/${blog._id}`}
						className={`${buttonVariants({
							variant: 'ghost',
						})} flex items-center text-primary gap-2 font-semibold text-sm text-nowrap hover:gap-3 transition-all duration-300`}
					>
						Read More
						<ArrowRight className='w-4 h-4' />
					</Link>
				</CardFooter>
			</CardContent>
		</Card>
	);
}
