'use client';

import { Button } from '@/components/ui/button';
import {
	FacebookIcon,
	InstagramIcon,
	LinkedinIcon,
	TwitterIcon,
} from 'lucide-react';
import { AppleIcon, PlayStoreIcon } from '../icons';

const socialLinks = [
	{ icon: FacebookIcon, href: '#' },
	{ icon: InstagramIcon, href: '#' },
	{ icon: LinkedinIcon, href: '#' },
	{ icon: TwitterIcon, href: '#' },
];

export function Footer() {
	return (
		<footer className='border-t'>
			<div className='mx-auto max-w-6xl px-4 lg:px-6'>
				{/* Social Buttons + App Links */}
				<div className='flex flex-wrap items-center justify-between gap-4 py-5'>
					<div className='flex items-center gap-2'>
						{socialLinks.map(({ icon: Icon, href }, index) => (
							<Button
								asChild
								key={`social-${href}-${index}`} // More descriptive prefix
								size='icon-sm'
								variant='outline'
							>
								<a href={href}>
									<Icon />
								</a>
							</Button>
						))}
					</div>

					<div className='flex gap-4'>
						<Button asChild className='h-11'>
							<a href='#'>
								<PlayStoreIcon className='size-5' />
								<div className='flex flex-col items-start justify-center pr-2 text-left'>
									<span className='font-light text-[10px] leading-none tracking-tighter'>
										GET IT ON
									</span>
									<p className='font-bold text-base leading-none'>
										Google Play
									</p>
								</div>
							</a>
						</Button>

						<Button asChild className='h-11'>
							<a href='#'>
								<AppleIcon className='size-5' />
								<div className='flex flex-col items-start justify-center pr-2 text-left'>
									<span className='text-[10px] leading-none tracking-tighter'>
										Download on the
									</span>
									<p className='font-bold text-base leading-none'>App Store</p>
								</div>
							</a>
						</Button>
					</div>
				</div>
				<div className='h-px bg-border' />
				<div className='py-4 text-center text-muted-foreground text-xs'>
					<p>&copy; {new Date().getFullYear()} efferd, All rights reserved</p>
				</div>
			</div>
		</footer>
	);
}
