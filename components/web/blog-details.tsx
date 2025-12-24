'use client';

import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import {
	BlogIdType,
	CommentIdType,
	CommentWithRepliesType,
} from '@/lib/types/convex';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
	Calendar,
	Clock,
	Eye,
	Heart,
	MessageCircle,
	Reply,
	Send,
} from 'lucide-react';
import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
} from '@/components/ui/input-group';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { Badge } from '../ui/badge';

export function BlogDetail({ blogId }: { blogId: BlogIdType }) {
	const blog = useQuery(api.blogs.getBlogById, { id: blogId });

	const comments = useQuery(api.comments.getCommentsWithReplies, {
		blogId,
	});

	const [replyingTo, setReplyingTo] = useState<CommentIdType | null>(null);

	const CommentItem = ({
		comment,
		isReply = false,
	}: {
		comment: CommentWithRepliesType;
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
							onClick={() => setReplyingTo(comment._id)}
							className='flex items-center gap-1.5 text-sm hover:bg-transparent hover:text-primary transition-colors'
							variant={'ghost'}
						>
							<Reply className='w-4 h-4' />
							<span>Reply</span>
						</Button>
					)}
				</div>

				{replyingTo === comment._id && (
					<InputGroup className='mt-3 ml-2 w-full'>
						<InputGroupInput
							type='text'
							// value={replyText}
							// onChange={(e) => setReplyText(e.target.value)}
							placeholder='Write a reply...'
							className='flex-1 focus:outline-none focus:ring-2 focus:ring-primary text-sm'
							// onKeyPress={(e) =>
							// 	e.key === 'Enter' && handleAddReply(comment._id)
							// }
						/>
						<InputGroupAddon align={'inline-end'}>
							<InputGroupButton
								variant={'default'}
								// onClick={() => handleAddReply(comment._id)}
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
							<div
								key={reply._id}
								className={`flex gap-4 ${isReply ? 'ml-12 mt-4' : ''}`}
							>
								<div className='w-10 h-10 rounded-full bg-linear-to-br from-primary to-primary/20 flex items-center justify-center text-white font-semibold text-sm shrink-0'>
									{reply.userAvatar}
								</div>
								<div className='flex-1 space-y-2'>
									<div className='bg-background rounded-lg p-4'>
										<div className='flex items-center justify-between mb-2'>
											<h4 className='font-semibold text-foreground'>
												{reply.userName}
											</h4>
											<span className='text-xs text-muted-foreground/50'>
												{new Date(reply.date).toLocaleDateString('en-US', {
													month: 'short',
													day: 'numeric',
												})}
											</span>
										</div>
										<p className='text-muted-foreground text-sm leading-relaxed'>
											{reply.comment}
										</p>
									</div>
									<div className='flex items-center gap-4 px-2'>
										<Button
											className='flex items-center gap-1.5 text-sm hover:bg-transparent hover:text-primary transition-colors'
											variant={'ghost'}
										>
											<Heart className='w-4 h-4' />
											<span>{reply.likes}</span>
										</Button>
										{!isReply && (
											<Button
												onClick={() => setReplyingTo(reply._id)}
												className='flex items-center gap-1.5 text-sm hover:bg-transparent hover:text-primary transition-colors'
												variant={'ghost'}
											>
												<Reply className='w-4 h-4' />
												<span>Reply</span>
											</Button>
										)}
									</div>

									{replyingTo === reply._id && (
										<InputGroup className='mt-3 ml-2 w-full'>
											<InputGroupInput
												type='text'
												// value={replyText}
												// onChange={(e) => setReplyText(e.target.value)}
												placeholder='Write a reply...'
												className='flex-1 focus:outline-none focus:ring-2 focus:ring-primary text-sm'
												// onKeyPress={(e) =>
												// 	// e.key === 'Enter' && handleAddReply(comment._id)
												// }
											/>
											<InputGroupAddon align={'inline-end'}>
												<InputGroupButton
													variant={'default'}
													// onClick={() => handleAddReply(comment._id)}
													className='transition-colors rounded-r-sm'
												>
													<Send className='w-4 h-4' />
												</InputGroupButton>
											</InputGroupAddon>
										</InputGroup>
									)}
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);

	if (!blog) return <div>Loading...</div>;

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
					<div className='prose prose-lg max-w-none text-muted-foreground'>
						<p className='leading-relaxed text-justify '>{blog.description}</p>
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
								Comments ({comments?.length})
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
										// value={newComment}
										// onChange={(e) => setNewComment(e.target.value)}
										placeholder='Share your thoughts...'
										className=''
										// onKeyPress={(e) => e.key === 'Enter' && handleAddComment()}
									/>
									<InputGroupAddon align={'inline-end'}>
										<InputGroupButton
											// onClick={handleAddComment}
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
							{comments?.map((comment) => (
								<CommentItem key={comment._id} comment={comment} />
							))}
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
