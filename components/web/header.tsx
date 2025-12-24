'use client';
import { useScroll } from '@/lib/hooks/use-scroll';
import { LogoIcon } from '@/components/web/logo';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MobileNav } from '@/components/web/mobile-nav';
import Link from 'next/link';
import { ModeToggle } from '@/components/web/mode-toggle';

export const navLinks = [
	{
		label: 'Home',
		href: '/',
	},
	{
		label: 'Blog',
		href: '/blog',
	},
	{
		label: 'About',
		href: '#',
	},
];

export function Header() {
	const scrolled = useScroll(10);

	return (
		<header
			className={cn(
				'sticky top-0 z-50 mx-auto w-full max-w-7xl border-transparent border-b md:rounded-md md:border md:transition-all md:ease-out',
				{
					'border-border bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/50 md:top-2 md:max-w-5xl md:shadow':
						scrolled,
				}
			)}
		>
			<nav
				className={cn(
					'flex h-14 w-full items-center justify-between px-4 md:h-12 md:transition-all md:ease-out',
					{
						'md:px-2': scrolled,
					}
				)}
			>
				<Link
					className='flex items-center gap-1 rounded-md p-2 hover:bg-accent '
					href='/'
				>
					<LogoIcon className='h-4.5' />
					<span className='font-bold text-xl tracking-wide'>Blogy</span>
				</Link>
				<div className='hidden items-center gap-1 md:flex'>
					{navLinks.map((link, i) => (
						<a
							className={buttonVariants({ variant: 'ghost' })}
							href={link.href}
							key={i}
						>
							{link.label}
						</a>
					))}
					<Link href='/auth/login'>
						<Button variant='outline'>Sign In</Button>
					</Link>
					<Link href='/auth/register'>
						<Button>Get Started</Button>
					</Link>
					<ModeToggle />
				</div>
				<MobileNav />
			</nav>
		</header>
	);
}
