'use client';

import { useTheme } from 'next-themes';
import { Toggle } from '@/components/ui/toggle';
import { Sun, Moon } from 'lucide-react';

export function ModeToggle() {
	const { setTheme, theme } = useTheme();

	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	return (
		<Toggle
			aria-label='Toggle dark mode'
			size='sm'
			variant='outline'
			onClick={toggleTheme}
			className='rounded-full flex justify-center items-center'
		>
			<Sun className='size-4 rotate-0 rounded-full scale-100 transition-all dark:duration-150 dark:-rotate-90 dark:scale-0' />
			<Moon className='absolute size-4 rotate-90 rounded-full scale-0 transition-all dark:duration-150 dark:rotate-0 dark:scale-100' />
		</Toggle>
	);
}
