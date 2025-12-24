import { query } from './_generated/server';
import { v } from 'convex/values';

// Get all blogs
export const getAllBlogs = query({
	args: {},
	handler: async (ctx) => {
		return await ctx.db.query('blogs').order('desc').collect();
	},
});

// Get n blogs
export const getBlogsByCount = query({
	args: { n: v.number() },
	handler: async (ctx, args) => {
		return await ctx.db.query('blogs').order('desc').take(args.n);
	},
});

// Get blog by ID
export const getBlogById = query({
	args: { id: v.id('blogs') },
	handler: async (ctx, args) => {
		return await ctx.db.get(args.id);
	},
});

// Get blogs by category
export const getBlogsByCategory = query({
	args: { category: v.string() },
	handler: async (ctx, args) => {
		return await ctx.db
			.query('blogs')
			.withIndex('by_category', (q) => q.eq('category', args.category))
			.collect();
	},
});

// Get published blogs
export const getPublishedBlogs = query({
	args: {},
	handler: async (ctx) => {
		return await ctx.db
			.query('blogs')
			.withIndex('by_status', (q) => q.eq('status', 'Published'))
			.collect();
	},
});
