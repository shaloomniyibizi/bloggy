import { Bell, Plus, Search } from 'lucide-react';
import {
	InputGroup,
	InputGroupButton,
	InputGroupInput,
} from '@/components/ui/input-group';
import { Button, buttonVariants } from '../ui/button';
import Link from 'next/link';

export const Header = () => {
	return (
		<div className='w-full px-8 py-4 flex items-center justify-between'>
			<div className='flex items-center gap-4 flex-1 max-w-2xl'>
				<InputGroup className='relative flex-1'>
					<InputGroupInput
						type='text'
						placeholder='Search posts, users, comments...'
						className=''
					/>
					<InputGroupButton className='transition-colors'>
						<Search className='size-5 text-muted-foreground' />
					</InputGroupButton>
				</InputGroup>
			</div>

			<div className='flex items-center gap-4'>
				<Button
					variant='ghost'
					className='relative p-2 rounded-xl transition-colors'
				>
					<Bell className='size-5 text-muted-foreground' />
					<span className='absolute top-1 right-1 size-2 bg-green-500 rounded-full'></span>
				</Button>
				<Link
					href='/admin?query=create-post'
					className={`flex items-center gap-2 transition-colors group rounded ${buttonVariants(
						{ variant: 'default' }
					)}`}
				>
					<Plus className='size-5' />
					<span className='group-hover:ml-2 transition-all'>New Post</span>
				</Link>
			</div>
		</div>
	);
};
