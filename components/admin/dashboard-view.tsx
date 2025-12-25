'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Eye, FileText, MessageSquare, TrendingUp, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { BlogType } from '@/lib/types/convex';

export default function DashboardView() {
	const blogData = useQuery(api.blogs.getBlogsByCount, { n: 5 });

	const stats = [
		{
			label: 'Total Posts',
			value: '156',
			change: '+12%',
			icon: FileText,
		},
		{
			label: 'Total Views',
			value: '1.2M',
			change: '+23%',
			icon: Eye,
		},
		{
			label: 'Comments',
			value: '8.5K',
			change: '+8%',
			icon: MessageSquare,
		},
		{
			label: 'Active Users',
			value: '45.2K',
			change: '+15%',
			icon: Users,
		},
	];

	return (
		<div className='space-y-6'>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
				{stats.map((stat, index) => (
					<Card
						key={index}
						className='border-0 rounded shadow-lg hover:shadow-xl transition-shadow duration-300'
					>
						<CardContent className='px-6'>
							<div className='flex items-start justify-between'>
								<div>
									<p className='text-muted-foreground mb-1'>{stat.label}</p>
									<h3 className='text-3xl font-bold'>{stat.value}</h3>
									<div className='flex items-center gap-1 mt-2'>
										<TrendingUp className='w-4 h-4 text-green-500' />
										<span className='text-sm text-green-500 font-semibold'>
											{stat.change}
										</span>
									</div>
								</div>
								<div className={`p-3 rounded-xl bg-accent`}>
									<stat.icon className={`w-6 h-6 text-accent-foreground`} />
								</div>
							</div>
						</CardContent>
					</Card>
				))}
			</div>

			<Card className='border-0 shadow-lg'>
				<CardContent className='p-6'>
					<h2 className='text-xl font-bold mb-4'>Recent Activity</h2>
					<div className='space-y-4'>
						{blogData &&
							blogData.map((blog) => (
								<DashboardBlogItem key={blog._id} blog={blog} />
							))}
					</div>
				</CardContent>
			</Card>
		</div>
	);
}

function DashboardBlogItem({ blog }: { blog: BlogType }) {
	const comments = useQuery(api.comments.getCommentsByBlogId, {
		blogId: blog._id,
	});

	return (
		<div className='flex items-center justify-between p-4 bg-accent rounded hover:bg-accent/80 transition-colors'>
			<div className='flex items-center gap-4'>
				<div className='w-12 h-12 bg-linear-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center'>
					<FileText className='w-6 h-6 text-foreground' />
				</div>
				<div>
					<h3 className='font-semibold text-accent-foreground'>{blog.title}</h3>
					<p className='text-sm text-muted-foreground'>
						by {blog.userName} • {blog.date}
					</p>
				</div>
			</div>
			<div className='flex items-center gap-4'>
				<div className='flex items-center gap-2 text-sm text-muted-foreground'>
					<Eye className='w-4 h-4' />
					<span>{blog.views}</span>
				</div>
				<div className='flex items-center gap-2 text-sm text-muted-foreground'>
					<MessageSquare className='w-4 h-4' />
					<span className='line-clamp-1'>{comments?.length || 0}</span>
				</div>
				<Badge
					className={`${
						blog.status === 'Published'
							? 'bg-green-100 text-green-700'
							: 'bg-yellow-100 text-yellow-700'
					} border-0`}
				>
					{blog.status}
				</Badge>
			</div>
		</div>
	);
}
