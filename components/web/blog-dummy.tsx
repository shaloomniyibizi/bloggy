'use client';

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
	Calendar,
	ArrowRight,
	Clock,
	Eye,
	MessageCircle,
	Send,
	Heart,
	Reply,
} from 'lucide-react';
import Image from 'next/image';
import { Blog, blogData, Comment, commentsData } from '@/data/blog';
import { useState } from 'react';
import Link from 'next/link';
import { Button, buttonVariants } from '@/components/ui/button';
import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
} from '@/components/ui/input-group';

export const BlogCardDummy = ({ blog }: { blog: Blog }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<Card
			className='group relative overflow-hidden border-0 pt-0 shadow-lg hover:shadow-2xl transition-all duration-500'
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<CardHeader className='relative p-0 h-64 overflow-hidden'>
				<Image
					src={blog.image}
					alt={blog.title}
					width={500}
					height={300}
					className={`w-full h-full object-cover transition-transform duration-700 ${
						isHovered ? 'scale-110' : 'scale-100'
					}`}
				/>
				<div className='absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent' />
				<Badge className='absolute top-0 left-0 bg-primary hover:bg-primary/80 text-foreground border-0 px-4 py-1.5 text-xs font-semibold'>
					{blog.category}
				</Badge>
				<div className='absolute bottom-4 left-4 right-4 flex items-center gap-3 text-white/90'>
					<div className='flex items-center gap-1.5 text-sm'>
						<Eye className='w-4 h-4' />
						<span>{blog.views}</span>
					</div>
					<div className='flex items-center gap-1.5 text-sm'>
						<Clock className='w-4 h-4' />
						<span>{blog.readTime}</span>
					</div>
				</div>
			</CardHeader>

			<CardContent className='space-y-4'>
				<CardTitle className='font-bold line-clamp-2 group-hover:text-primary transition-colors duration-300'>
					{blog.title}
				</CardTitle>

				<CardDescription className='text-muted-foreground text-sm line-clamp-3 leading-relaxed'>
					{blog.description}
				</CardDescription>

				<CardFooter className='flex items-center justify-between px-0 border-t'>
					<div className='flex items-center gap-3'>
						<div className='size-8 rounded-full bg-linear-to-br from-primary to-primary/40 flex items-center justify-center text-foreground font-semibold text-sm'>
							{blog.userName.charAt(0)}
						</div>
						<div>
							<p className='text-sm font-semibold text-foreground/80'>
								{blog.userName}
							</p>
							<div className='flex items-center gap-1.5 text-xs italic text-muted-foreground'>
								<Calendar className='w-3 h-3' />
								<span>
									{new Date(blog.date).toLocaleDateString('en-RW', {
										month: 'short',
										day: 'numeric',
										year: 'numeric',
									})}
								</span>
							</div>
						</div>
					</div>

					<Link
						href={`/blog/${blog.blogId}`}
						className={`${buttonVariants({
							variant: 'ghost',
						})} flex items-center text-primary gap-2 font-semibold text-sm text-nowrap hover:gap-3 transition-all duration-300`}
					>
						Read More
						<ArrowRight className='w-4 h-4' />
					</Link>
				</CardFooter>
			</CardContent>
		</Card>
	);
};

export const SingleBlogCard = ({ blogId }: { blogId: number }) => {
	const [comments, setComments] = useState<Comment[]>(commentsData);

	const [newComment, setNewComment] = useState('');
	const [replyingTo, setReplyingTo] = useState<number | null>(null);
	const [replyText, setReplyText] = useState('');

	const handleAddComment = () => {
		if (newComment.trim()) {
			const comment = {
				id: Date.now(),
				userName: 'Current User',
				userAvatar: 'CU',
				comment: newComment,
				date: new Date().toISOString().split('T')[0],
				likes: 0,
				replies: [],
			};
			setComments([comment, ...comments]);
			setNewComment('');
		}
	};

	const handleAddReply = (commentId: number) => {
		if (replyText.trim()) {
			const reply = {
				id: Date.now(),
				userName: 'Current User',
				userAvatar: 'CU',
				comment: replyText,
				date: new Date().toISOString().split('T')[0],
				likes: 0,
			};

			setComments(
				comments.map((comment) => {
					if (comment.id === commentId) {
						return {
							...comment,
							replies: [...(comment.replies || []), reply],
						};
					}
					return comment;
				})
			);
			setReplyText('');
			setReplyingTo(null);
		}
	};
	const CommentItem = ({
		comment,
		isReply = false,
	}: {
		comment: Comment;
		isReply?: boolean;
	}) => (
		<div className={`flex gap-4 ${isReply ? 'ml-12 mt-4' : ''}`}>
			<div className='w-10 h-10 rounded-full bg-linear-to-br from-primary to-primary/20 flex items-center justify-center text-white font-semibold text-sm shrink-0'>
				{comment.userAvatar}
			</div>
			<div className='flex-1 space-y-2'>
				<div className='bg-background rounded-lg p-4'>
					<div className='flex items-center justify-between mb-2'>
						<h4 className='font-semibold text-foreground'>
							{comment.userName}
						</h4>
						<span className='text-xs text-muted-foreground/50'>
							{new Date(comment.date).toLocaleDateString('en-US', {
								month: 'short',
								day: 'numeric',
							})}
						</span>
					</div>
					<p className='text-muted-foreground text-sm leading-relaxed'>
						{comment.comment}
					</p>
				</div>
				<div className='flex items-center gap-4 px-2'>
					<Button
						className='flex items-center gap-1.5 text-sm hover:bg-transparent hover:text-primary transition-colors'
						variant={'ghost'}
					>
						<Heart className='w-4 h-4' />
						<span>{comment.likes}</span>
					</Button>
					{!isReply && (
						<Button
							onClick={() => setReplyingTo(comment.id)}
							className='flex items-center gap-1.5 text-sm hover:bg-transparent hover:text-primary transition-colors'
							variant={'ghost'}
						>
							<Reply className='w-4 h-4' />
							<span>Reply</span>
						</Button>
					)}
				</div>

				{replyingTo === comment.id && (
					<InputGroup className='mt-3 ml-2 w-full'>
						<InputGroupInput
							type='text'
							value={replyText}
							onChange={(e) => setReplyText(e.target.value)}
							placeholder='Write a reply...'
							className='flex-1 focus:outline-none focus:ring-2 focus:ring-primary text-sm'
							onKeyPress={(e) =>
								e.key === 'Enter' && handleAddReply(comment.id)
							}
						/>
						<InputGroupAddon align={'inline-end'}>
							<InputGroupButton
								variant={'default'}
								onClick={() => handleAddReply(comment.id)}
								className='transition-colors rounded-r-sm'
							>
								<Send className='w-4 h-4' />
							</InputGroupButton>
						</InputGroupAddon>
					</InputGroup>
				)}

				{comment.replies && comment.replies.length > 0 && (
					<div className='space-y-4'>
						{comment.replies.map((reply) => (
							<CommentItem key={reply.id} comment={reply} isReply={true} />
						))}
					</div>
				)}
			</div>
		</div>
	);
	const blog = blogData.find((blog) => blog.blogId === blogId);
	if (!blog) return 'no blog';
	return (
		<div className='max-w-4xl mx-auto'>
			<Card className='overflow-hidden border-0 shadow-2xl rounded-3xl pt-0'>
				<CardHeader className='relative p-0 h-96 overflow-hidden'>
					<Image
						src={blog.image}
						alt={blog.title}
						width={800}
						height={600}
						className='w-full h-full object-cover'
					/>
					<div className='absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent' />
					<div className='absolute bottom-0 left-0 right-0 p-8 text-white'>
						<Badge className='mb-4 bg-primary hover:bg-primary/80 text-white border-0 px-4 py-1.5 text-sm font-semibold'>
							{blog.category}
						</Badge>
						<CardTitle className='text-4xl font-bold mb-4 leading-tight'>
							<h1>{blog.title}</h1>
						</CardTitle>
						<CardDescription className='flex items-center gap-6 text-white/90'>
							<div className='flex items-center gap-2'>
								<div className='w-12 h-12 rounded-full bg-linear-to-br from-primary to-primary/20 flex items-center justify-center text-white font-semibold'>
									{blog.userName.charAt(0)}
								</div>
								<div>
									<p className='font-semibold'>{blog.userName}</p>
									<p className='text-sm text-white/80'>Author</p>
								</div>
							</div>
							<div className='h-8 w-px bg-white/30' />
							<div className='flex items-center gap-2'>
								<Calendar className='w-5 h-5' />
								<span>
									{new Date(blog.date).toLocaleDateString('en-US', {
										month: 'long',
										day: 'numeric',
										year: 'numeric',
									})}
								</span>
							</div>
							<div className='flex items-center gap-2'>
								<Clock className='w-5 h-5' />
								<span>{blog.readTime}</span>
							</div>
							<div className='flex items-center gap-2'>
								<Eye className='w-5 h-5' />
								<span>{blog.views}</span>
							</div>
						</CardDescription>
					</div>
				</CardHeader>

				<CardContent className='p-8 space-y-6'>
					<div className='prose prose-lg max-w-none  text-muted-foreground'>
						<p className='leading-relaxed'>{blog.description}</p>
					</div>

					<div className='flex items-center gap-4 pt-6 border-t'>
						<Button className='flex-1 cursor-pointer font-bold rounded-sm transition-colors duration-300'>
							Share Article
						</Button>
						<Button
							className='flex-1 cursor-pointer font-bold rounded-sm transition-colors duration-300'
							variant={'outline'}
						>
							Save for Later
						</Button>
					</div>

					{/* Comments Section */}
					<div className='pt-8 border-t-2 space-y-6'>
						<div className='flex items-center justify-between'>
							<h2 className='text-2xl font-bold  flex items-center gap-2'>
								<MessageCircle className='w-6 h-6 text-primary' />
								Comments ({comments.length})
							</h2>
						</div>

						{/* Add Comment */}
						<div className='bg-linear-to-r from-secondary to-primary/20 p-6 rounded-2xl space-y-4'>
							<h3 className='font-semibold'>Join the discussion</h3>
							<div className='flex gap-3'>
								<div className='w-10 h-10 rounded-full bg-linear-to-br from-primary to-primary/20 flex items-center justify-center text-white font-semibold text-sm shrink-0'>
									CU
								</div>
								<InputGroup className='flex-1 flex bg-background'>
									<InputGroupInput
										type='text'
										value={newComment}
										onChange={(e) => setNewComment(e.target.value)}
										placeholder='Share your thoughts...'
										className=''
										onKeyPress={(e) => e.key === 'Enter' && handleAddComment()}
									/>
									<InputGroupAddon align={'inline-end'}>
										<InputGroupButton
											onClick={handleAddComment}
											className='rounded-r-sm'
											variant={'default'}
										>
											<Send className='w-4 h-4' />
											Post
										</InputGroupButton>
									</InputGroupAddon>
								</InputGroup>
							</div>
						</div>

						{/* Comments List */}
						<div className='space-y-6'>
							{comments.map((comment) => (
								<CommentItem key={comment.id} comment={comment} />
							))}
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};
