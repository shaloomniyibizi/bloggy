import { Bell, Plus, Search } from 'lucide-react';
import {
	InputGroup,
	InputGroupButton,
	InputGroupInput,
} from '@/components/ui/input-group';
import { Button } from '../ui/button';

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
					<Bell className='w-5 h-5 text-gray-600' />
					<span className='absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full'></span>
				</Button>
				<Button className=''>
					<Plus className='w-5 h-5' />
					New Post
				</Button>
			</div>
		</div>
	);
};
