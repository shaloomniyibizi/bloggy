import { Card, CardContent } from '@/components/ui/card';
import { Eye, FileText, MessageSquare, TrendingUp, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { blogData } from '@/data/blog';

export default function DashboardView() {
	const stats = [
		{
			label: 'Total Posts',
			value: '156',
			change: '+12%',
			icon: FileText,
			color: 'blue',
		},
		{
			label: 'Total Views',
			value: '1.2M',
			change: '+23%',
			icon: Eye,
			color: 'purple',
		},
		{
			label: 'Comments',
			value: '8.5K',
			change: '+8%',
			icon: MessageSquare,
			color: 'green',
		},
		{
			label: 'Active Users',
			value: '45.2K',
			change: '+15%',
			icon: Users,
			color: 'orange',
		},
	];

	return (
		<div className='space-y-6'>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
				{stats.map((stat, index) => (
					<Card
						key={index}
						className='border-0 shadow-lg hover:shadow-xl transition-shadow duration-300'
					>
						<CardContent className='p-6'>
							<div className='flex items-start justify-between'>
								<div>
									<p className='text-sm text-gray-600 mb-1'>{stat.label}</p>
									<h3 className='text-3xl font-bold text-gray-900'>
										{stat.value}
									</h3>
									<div className='flex items-center gap-1 mt-2'>
										<TrendingUp className='w-4 h-4 text-green-500' />
										<span className='text-sm text-green-500 font-semibold'>
											{stat.change}
										</span>
									</div>
								</div>
								<div className={`p-3 rounded-xl bg-${stat.color}-100`}>
									<stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
								</div>
							</div>
						</CardContent>
					</Card>
				))}
			</div>

			<Card className='border-0 shadow-lg'>
				<CardContent className='p-6'>
					<h2 className='text-xl font-bold text-gray-900 mb-4'>
						Recent Activity
					</h2>
					<div className='space-y-4'>
						{blogData.slice(0, 5).map((blog) => (
							<div
								key={blog.blogId}
								className='flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors'
							>
								<div className='flex items-center gap-4'>
									<div className='w-12 h-12 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center'>
										<FileText className='w-6 h-6 text-white' />
									</div>
									<div>
										<h3 className='font-semibold text-gray-900'>
											{blog.title}
										</h3>
										<p className='text-sm text-gray-500'>
											by {blog.userName} • {blog.date}
										</p>
									</div>
								</div>
								<div className='flex items-center gap-4'>
									<div className='flex items-center gap-2 text-sm text-gray-600'>
										<Eye className='w-4 h-4' />
										<span>{blog.views}</span>
									</div>
									<div className='flex items-center gap-2 text-sm text-gray-600'>
										<MessageSquare className='w-4 h-4' />
										<span>This is my comment</span>
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
						))}
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
