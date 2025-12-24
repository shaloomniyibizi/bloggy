'use client';

import { ButtonGroup } from '@/components/ui/button-group';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from '@/components/ui/sidebar';
import { signOut } from '@/lib/auth-client';
import { ChevronsUpDown, LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

import * as React from 'react';

type Profile = {
	name: string;
	logo: React.ElementType;
	plan: string;
};

export function ProfileSwitcher({ profiles }: { profiles: Profile[] }) {
	const { isMobile } = useSidebar();
	const [activeProfile, setActiveProfile] = React.useState(profiles[0]);
	const router = useRouter();

	const handleSignOut = async () => {
		await signOut();
		router.push('/');
	};

	if (!activeProfile) return null;
	const Logo = activeProfile.logo;

	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<SidebarMenuButton
							size='lg'
							className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
						>
							<div className='flex aspect-square size-8 items-center justify-center rounded-lg bg-background text-foreground'>
								<Logo className='size-4' />
							</div>
							<div className='grid flex-1 text-left text-sm leading-tight'>
								<span className='truncate font-semibold'>
									{activeProfile.name}
								</span>
								<span className='truncate text-xs'>{activeProfile.plan}</span>
							</div>
							<ChevronsUpDown className='ml-auto' />
						</SidebarMenuButton>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						className='w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg mb-4'
						align='start'
						side={isMobile ? 'bottom' : 'right'}
						sideOffset={4}
					>
						<DropdownMenuLabel className='text-xs text-muted-foreground'>
							Settings
						</DropdownMenuLabel>
						{profiles.map((profile, index) => (
							<DropdownMenuItem
								key={profile.name}
								onClick={() => setActiveProfile(profile)}
								className='gap-2 p-2'
							>
								<div className='flex size-6 items-center justify-center rounded-sm border'>
									<profile.logo className='size-4 shrink-0' />
								</div>
								{profile.name}
								<DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
							</DropdownMenuItem>
						))}
						<DropdownMenuSeparator />
						<DropdownMenuItem className='gap-2 p-2'>
							<ButtonGroup
								onClick={handleSignOut}
								className='font-medium text-muted-foreground space-x-2'
							>
								<LogOut className='size-4' /> {''}
								LogOut
							</ButtonGroup>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>
	);
}
