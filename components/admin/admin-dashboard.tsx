'use client';

import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, Users, Settings, BarChart3 } from 'lucide-react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { DashboardSidebar } from '@/components/admin/sidebar/app-sidebar';
import DashboardView from '@/components/admin/dashboard-view';
import { PostView } from '@/components/admin/post-view';
import { Header } from '@/components/admin/header';
import { useSearchParams } from 'next/navigation';

const AdminDashboard = () => {
	const params = useSearchParams();
	const query = params.get('query') || 'dashboard';

	// const Modal = () => (
	// 	<div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4'>
	// 		<Card className='w-full max-w-2xl border-0 shadow-2xl max-h-[90vh] overflow-y-auto'>
	// 			<CardContent className='p-6'>
	// 				<div className='flex items-center justify-between mb-6'>
	// 					<h2 className='text-2xl font-bold text-gray-900'>
	// 						{editingBlog ? 'Edit Blog Post' : 'Create New Post'}
	// 					</h2>
	// 					<button
	// 						onClick={() => setShowModal(false)}
	// 						className='p-2 hover:bg-gray-100 rounded-lg transition-colors'
	// 					>
	// 						<X className='w-5 h-5' />
	// 					</button>
	// 				</div>

	// 				<div className='space-y-4'>
	// 					<div>
	// 						<label className='block text-sm font-semibold text-gray-700 mb-2'>
	// 							Title
	// 						</label>
	// 						<input
	// 							type='text'
	// 							value={formData.title}
	// 							onChange={(e) =>
	// 								setFormData({ ...formData, title: e.target.value })
	// 							}
	// 							className='w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500'
	// 							placeholder='Enter blog title...'
	// 						/>
	// 					</div>

	// 					<div>
	// 						<label className='block text-sm font-semibold text-gray-700 mb-2'>
	// 							Category
	// 						</label>
	// 						<input
	// 							type='text'
	// 							value={formData.category}
	// 							onChange={(e) =>
	// 								setFormData({ ...formData, category: e.target.value })
	// 							}
	// 							className='w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500'
	// 							placeholder='e.g., Technology, AI, Science'
	// 						/>
	// 					</div>

	// 					<div>
	// 						<label className='block text-sm font-semibold text-gray-700 mb-2'>
	// 							Description
	// 						</label>
	// 						<textarea
	// 							value={formData.description}
	// 							onChange={(e) =>
	// 								setFormData({ ...formData, description: e.target.value })
	// 							}
	// 							rows={4}
	// 							className='w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500'
	// 							placeholder='Write a brief description...'
	// 						/>
	// 					</div>

	// 					<div>
	// 						<label className='block text-sm font-semibold text-gray-700 mb-2'>
	// 							Featured Image
	// 						</label>
	// 						<div className='border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-500 transition-colors cursor-pointer'>
	// 							<ImagePlus className='w-12 h-12 text-gray-400 mx-auto mb-2' />
	// 							<p className='text-sm text-gray-600'>
	// 								Click to upload or drag and drop
	// 							</p>
	// 							<p className='text-xs text-gray-400 mt-1'>
	// 								PNG, JPG up to 10MB
	// 							</p>
	// 						</div>
	// 					</div>

	// 					<div>
	// 						<label className='block text-sm font-semibold text-gray-700 mb-2'>
	// 							Status
	// 						</label>
	// 						<select
	// 							value={formData.status}
	// 							onChange={(e) =>
	// 								setFormData({ ...formData, status: e.target.value })
	// 							}
	// 							className='w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500'
	// 						>
	// 							<option>Draft</option>
	// 							<option>Published</option>
	// 						</select>
	// 					</div>

	// 					<div className='flex gap-3 pt-4'>
	// 						<button
	// 							onClick={() => setShowModal(false)}
	// 							className='flex-1 px-6 py-3 border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-colors font-semibold'
	// 						>
	// 							Cancel
	// 						</button>
	// 						<button
	// 							onClick={handleSave}
	// 							className='flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 font-semibold flex items-center justify-center gap-2'
	// 						>
	// 							<Save className='w-5 h-5' />
	// 							{editingBlog ? 'Update Post' : 'Create Post'}
	// 						</button>
	// 					</div>
	// 				</div>
	// 			</CardContent>
	// 		</Card>
	// 	</div>
	// );

	return (
		<SidebarProvider>
			<div className='flex min-h-screen w-full mx-auto'>
				<DashboardSidebar />
				<div className='flex-1 w-full'>
					<Header />
					<div className='p-8'>
						{query === 'dashboard' && <DashboardView />}
						{query === 'posts' && <PostView />}
						{query === 'comments' && (
							<Card className='border-0 shadow-lg w-full'>
								<CardContent className='p-8 text-center text-gray-500'>
									<MessageSquare className='w-16 h-16 mx-auto mb-4 text-gray-300' />
									<p className='text-lg'>Comments management coming soon...</p>
								</CardContent>
							</Card>
						)}
						{query === 'users' && (
							<Card className='border-0 shadow-lg w-full'>
								<CardContent className='p-8 text-center text-gray-500'>
									<Users className='w-16 h-16 mx-auto mb-4 text-gray-300' />
									<p className='text-lg'>User management coming soon...</p>
								</CardContent>
							</Card>
						)}
						{query === 'analytics' && (
							<Card className='border-0 shadow-lg'>
								<CardContent className='p-8 text-center text-gray-500'>
									<BarChart3 className='w-16 h-16 mx-auto mb-4 text-gray-300' />
									<p className='text-lg'>Analytics dashboard coming soon...</p>
								</CardContent>
							</Card>
						)}
						{query === 'settings' && (
							<Card className='border-0 shadow-lg'>
								<CardContent className='p-8 text-center text-gray-500'>
									<Settings className='w-16 h-16 mx-auto mb-4 text-gray-300' />
									<p className='text-lg'>Settings panel coming soon...</p>
								</CardContent>
							</Card>
						)}
					</div>
				</div>
				{/* {showModal && <Modal />} */}
			</div>
		</SidebarProvider>
	);
};

export default AdminDashboard;
