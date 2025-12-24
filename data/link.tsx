import {
	LayoutDashboard,
	FileText,
	MessageSquare,
	Users,
	BarChart3,
	Settings,
} from 'lucide-react';
import type { Route } from '@/components/admin/sidebar/nav-main';
import { LogoIcon } from '@/components/web/logo';

export const dashboardRoutes: Route[] = [
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
		link: '/admin?query=analytics',
	},
	{
		id: 'settings',
		title: 'Settings',
		icon: <Settings className='size-4' />,
		link: '/admin?query=settings',
	},
];

export const profiles = [
	{ id: '1', name: 'Profile', logo: LogoIcon, plan: 'Free' },
	{ id: '2', name: 'Settings', logo: LogoIcon, plan: 'Free' },
];
