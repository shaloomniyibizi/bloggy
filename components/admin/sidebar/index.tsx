import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { DashboardSidebar } from '@/components/admin/sidebar/app-sidebar';

export default function Sidebar() {
	return (
		<SidebarProvider>
			<div className='relative flex h-screen w-full'>
				<DashboardSidebar />
				<SidebarInset className='flex flex-col' />
			</div>
		</SidebarProvider>
	);
}
