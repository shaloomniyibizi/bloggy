import { cn } from '@/lib/utils';

function Wrapper({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div className='bg-background w-full'>
			<div
				data-slot='wrapper'
				className={cn(
					'mx-auto min-h-screen w-full max-w-7xl min-w-0 p-4 pt-2 sm:p-6 lg:p-12 2xl:max-w-6xl',
					className
				)}
				{...props}
			/>
		</div>
	);
}

export { Wrapper };
