import { Card, CardContent } from '@/components/ui/card';
import { blogData } from '@/data/blog';
import { Badge } from '../ui/badge';
import { Edit, Eye, MessageSquare, MoreVertical, Trash2 } from 'lucide-react';
import { Button } from '../ui/button';

export const PostView = () => {
	return (
		<Card className='border-0 shadow-lg'>
			<CardContent className='p-6'>
				<div className='flex items-center justify-between mb-6'>
					<h2 className='text-2xl font-bold text-gray-900'>All Blog Posts</h2>
					<div className='flex items-center gap-3'>
						<select className='px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500'>
							<option>All Status</option>
							<option>Published</option>
							<option>Draft</option>
						</select>
						<select className='px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500'>
							<option>All Categories</option>
							<option>Quantum Tech</option>
							<option>AI & Health</option>
							<option>5G & IoT</option>
						</select>
					</div>
				</div>

				<div className='overflow-x-auto'>
					<table className='w-full'>
						<thead>
							<tr className='border-b border-gray-200'>
								<th className='text-left py-4 px-4 font-semibold text-gray-700'>
									Title
								</th>
								<th className='text-left py-4 px-4 font-semibold text-gray-700'>
									Category
								</th>
								<th className='text-left py-4 px-4 font-semibold text-gray-700'>
									Author
								</th>
								<th className='text-left py-4 px-4 font-semibold text-gray-700'>
									Date
								</th>
								<th className='text-left py-4 px-4 font-semibold text-gray-700'>
									Status
								</th>
								<th className='text-left py-4 px-4 font-semibold text-gray-700'>
									Stats
								</th>
								<th className='text-right py-4 px-4 font-semibold text-gray-700'>
									Actions
								</th>
							</tr>
						</thead>
						<tbody>
							{blogData.map((blog) => (
								<tr
									key={blog.blogId}
									className='border-b border-gray-100 hover:bg-gray-50 transition-colors'
								>
									<td className='py-4 px-4'>
										<p className='font-semibold text-gray-900'>{blog.title}</p>
									</td>
									<td className='py-4 px-4'>
										<Badge className='bg-blue-100 text-blue-700 border-0'>
											{blog.category}
										</Badge>
									</td>
									<td className='py-4 px-4 text-gray-600'>{blog.userName}</td>
									<td className='py-4 px-4 text-gray-600'>{blog.date}</td>
									<td className='py-4 px-4'>
										<Badge
											className={`${
												blog.status === 'Published'
													? 'bg-green-100 text-green-700'
													: 'bg-yellow-100 text-yellow-700'
											} border-0`}
										>
											{blog.status}
										</Badge>
									</td>
									<td className='py-4 px-4'>
										<div className='flex items-center gap-3 text-sm text-gray-600'>
											<span className='flex items-center gap-1'>
												<Eye className='w-4 h-4' /> {blog.views}
											</span>
											<span className='flex items-center gap-1'>
												<MessageSquare className='w-4 h-4' /> This is my
												comments
											</span>
										</div>
									</td>
									<td className='py-4 px-4'>
										<div className='flex items-center justify-end gap-2'>
											<Button
												variant={'ghost'}
												className='p-2 hover:bg-blue-100 rounded-lg transition-colors'
											>
												<Edit className='w-4 h-4 text-blue-600' />
											</Button>
											<Button
												variant={'ghost'}
												className='p-2 hover:bg-red-100 rounded-lg transition-colors'
											>
												<Trash2 className='w-4 h-4 text-red-600' />
											</Button>
											<Button
												variant={'ghost'}
												className='p-2 hover:bg-gray-200 rounded-lg transition-colors'
											>
												<MoreVertical className='w-4 h-4 text-gray-600' />
											</Button>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</CardContent>
		</Card>
	);
};
