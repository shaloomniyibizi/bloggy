import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
	blogs: defineTable({
		title: v.string(),
		image: v.string(),
		description: v.string(),
		date: v.string(),
		userName: v.string(),
		category: v.string(),
		readTime: v.optional(v.string()),
		views: v.optional(v.string()),
		status: v.union(
			v.literal('Published'),
			v.literal('Draft'),
			v.literal('Archived')
		),
	})
		.index('by_date', ['date'])
		.index('by_category', ['category'])
		.index('by_status', ['status'])
		.index('by_userName', ['userName']),

	comments: defineTable({
		blogId: v.id('blogs'),
		userName: v.string(),
		userAvatar: v.string(),
		comment: v.string(),
		date: v.string(),
		likes: v.number(),
		parentCommentId: v.optional(v.id('comments')),
	})
		.index('by_blogId', ['blogId'])
		.index('by_date', ['date'])
		.index('by_parentCommentId', ['parentCommentId'])
		.index('by_blogId_and_parentCommentId', ['blogId', 'parentCommentId']),
});
