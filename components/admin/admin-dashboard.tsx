'use client';

import { PostView } from '@/components/admin/post-view';
import { BlogPostForm } from '@/components/admin/blog-post-form';
import { useSearchParams } from 'next/navigation';
import { SidebarProvider } from '@/components/ui/sidebar';
import { DashboardSidebar } from '@/components/admin/sidebar/app-sidebar';
import DashboardView from '@/components/admin/dashboard-view';
import { Header } from '@/components/admin/header';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, Users, Settings, BarChart3 } from 'lucide-react';

const AdminDashboard = () => {
	const params = useSearchParams();
	const query = params.get('query') || 'dashboard';

	return (
		<SidebarProvider>
			<div className='flex min-h-screen w-full mx-auto'>
				<DashboardSidebar />
				<div className='flex-1 w-full'>
					<Header />
					<div className='p-8'>
						{query === 'dashboard' && <DashboardView />}
						{query === 'posts' && <PostView />}
						{query === 'create-post' && <BlogPostForm />}
						{query === 'comments' && (
							<Card className='border-0 shadow-lg w-full'>
								<CardContent className='p-8 text-center '>
									<MessageSquare className='w-16 h-16 mx-auto mb-4' />
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
			</div>
		</SidebarProvider>
	);
};

export default AdminDashboard;
