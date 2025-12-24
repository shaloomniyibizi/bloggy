import { Doc, Id } from '@/convex/_generated/dataModel';

// Type for a complete blog document (includes _id and _creationTime)
export type BlogType = Doc<'blogs'>;

// Type for a complete comment document
export type CommentType = Doc<'comments'>;

// Type for blog ID
export type BlogIdType = Id<'blogs'>;

// Type for comment ID
export type CommentIdType = Id<'comments'>;

// Type for blog input
export type BlogInputType = Omit<BlogType, '_id' | '_creationTime'>;

// Type for comment input
export type CommentInputType = Omit<CommentType, '_id' | '_creationTime'>;

// Comment with nested replies
export type CommentWithRepliesType = CommentType & {
	replies: CommentType[];
};

export type BlogWithCommentsType = BlogType & {
	comments: CommentWithRepliesType[];
};
