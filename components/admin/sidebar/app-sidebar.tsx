'use client';

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarTrigger,
	useSidebar,
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import {
	BarChart3,
	FileText,
	LayoutDashboard,
	MessageSquare,
	Settings,
	Users,
} from 'lucide-react';
import type { Route } from './nav-main';
import DashboardNavigation from '@/components/admin/sidebar/nav-main';
import { ProfileSwitcher } from '@/components/admin/sidebar/profile-switcher';
import { LogoIcon } from '@/components/web/logo';
import { profiles } from '@/data/link';

const dashboardRoutes: Route[] = [
	{
		id: 'dashboard',
		title: 'Dashboard',
		icon: <LayoutDashboard className='size-4' />,
		link: '/admin',
	},
	{
		id: 'posts',
		title: 'All Posts',
		icon: <FileText className='size-4' />,
		link: '/admin?query=posts',
	},
	{
		id: 'comments',
		title: 'Comments',
		icon: <MessageSquare className='size-4' />,
		link: '/admin?query=comments',
	},
	{
		id: 'users',
		title: 'Users',
		icon: <Users className='size-4' />,
		link: '/admin?query=users',
	},
	{
		id: 'analytics',
		title: 'Analytics',
		icon: <BarChart3 className='size-4' />,
		link: '#',
	},
	{
		id: 'settings',
		title: 'Settings',
		icon: <Settings className='size-4' />,
		link: '#',
	},
];

export function DashboardSidebar() {
	const { state } = useSidebar();
	const isCollapsed = state === 'collapsed';

	return (
		<Sidebar variant='floating' collapsible='icon'>
			<SidebarHeader
				className={cn(
					'flex md:pt-3.5',
					isCollapsed
						? 'flex-row items-center justify-between gap-y-4 md:flex-col md:items-start md:justify-start'
						: 'flex-row items-center justify-between'
				)}
			>
				<a href='#' className='flex items-center gap-2'>
					<LogoIcon className='h-8 w-8' />
					{!isCollapsed && <span className='font-semibold'>Bloggy</span>}
				</a>

				<motion.div
					key={isCollapsed ? 'header-collapsed' : 'header-expanded'}
					className={cn(
						'flex items-center gap-2',
						isCollapsed ? 'flex-row md:flex-col-reverse' : 'flex-row'
					)}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.8 }}
				>
					<SidebarTrigger />
				</motion.div>
			</SidebarHeader>
			<SidebarContent className='gap-4 px-2 py-4'>
				<DashboardNavigation routes={dashboardRoutes} />
			</SidebarContent>
			<SidebarFooter className='px-2'>
				<ProfileSwitcher profiles={profiles} />
			</SidebarFooter>
		</Sidebar>
	);
}
