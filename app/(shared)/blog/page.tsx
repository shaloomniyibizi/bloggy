'use client';

import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { BlogCard } from '@/components/web/blog-card';

export default function BlogPage() {
	const blogs = useQuery(api.blogs.getAllBlogs);
	if (!blogs) return <div>Loading...</div>;
	return (
		<div className='grid grid-cols-1 w-full mx-auto content-center md:grid-cols-2 lg:grid-cols-3 gap-4'>
			{blogs.map((blog) => (
				<BlogCard blog={blog} key={blog._id} />
			))}
		</div>
	);
}
