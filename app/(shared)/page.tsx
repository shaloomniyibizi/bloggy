'use client';

import { Footer } from '@/components/web/footer';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { BlogCard } from '@/components/web/blog-card';
import { Wrapper } from '@/components/providers/wrapper';

export default function Page() {
	const blogs = useQuery(api.blogs.getBlogsByCount, { n: 3 });
	if (!blogs) return <div>Loading...</div>;
	return (
		<>
			<div className='bg-linear-to-br from-secondary via-secondary/80 to-secondary/40 p-8'>
				<div className='max-w-5xl mx-auto space-y-12'>
					<div className='text-center space-y-4'>
						<h1 className='text-5xl font-bold bg-linear-to-r from-primary to-primary/80 bg-clip-text text-transparent'>
							Modern Tech Blog
						</h1>
						<p className='text-lg'>
							Explore the latest in technology and innovation
						</p>
					</div>
				</div>
			</div>
			<Wrapper>
				<div className='grid grid-cols-1 w-full mx-auto content-center md:grid-cols-2 lg:grid-cols-3 gap-4'>
					{blogs.map((blog) => (
						<BlogCard blog={blog} key={blog._id} />
					))}
				</div>
			</Wrapper>
			<Footer />
		</>
	);
}
