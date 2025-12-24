import { query } from './_generated/server';
import { v } from 'convex/values';

// Get all comments for a blog
export const getCommentsByBlogId = query({
	args: { blogId: v.id('blogs') },
	handler: async (ctx, args) => {
		return await ctx.db
			.query('comments')
			.withIndex('by_blogId', (q) => q.eq('blogId', args.blogId))
			.collect();
	},
});

// Get top-level comments only (no replies)
export const getTopLevelComments = query({
	args: { blogId: v.id('blogs') },
	handler: async (ctx, args) => {
		return await ctx.db
			.query('comments')
			.withIndex('by_blogId_and_parentCommentId', (q) =>
				q.eq('blogId', args.blogId).eq('parentCommentId', undefined)
			)
			.collect();
	},
});

// Get replies for a specific comment
export const getRepliesByCommentId = query({
	args: { commentId: v.id('comments') },
	handler: async (ctx, args) => {
		return await ctx.db
			.query('comments')
			.withIndex('by_parentCommentId', (q) =>
				q.eq('parentCommentId', args.commentId)
			)
			.collect();
	},
});

// Get comments with replies nested
export const getCommentsWithReplies = query({
	args: { blogId: v.id('blogs') },
	handler: async (ctx, args) => {
		// Get all comments for this blog
		const allComments = await ctx.db
			.query('comments')
			.withIndex('by_blogId', (q) => q.eq('blogId', args.blogId))
			.collect();

		// Separate top-level comments and replies
		const topLevel = allComments.filter((c) => !c.parentCommentId);
		const replies = allComments.filter((c) => c.parentCommentId);

		// Attach replies to their parent comments
		return topLevel.map((comment) => ({
			...comment,
			replies: replies.filter((r) => r.parentCommentId === comment._id),
		}));
	},
});
