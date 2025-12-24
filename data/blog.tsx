export const blogData = [
	{
		blogId: 1,
		title: 'The Rise of Quantum Computing: Breaking Traditional Barriers',
		image:
			'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80',
		description:
			'Quantum computing is revolutionizing computational capabilities, offering unprecedented processing power that could solve complex problems in minutes that would take classical computers thousands of years.',
		date: '2025-12-15',
		userName: 'Dr. Sarah Chen',
		link: '/blog/quantum-computing-rise',
		category: 'Quantum Tech',
		readTime: '8 min read',
		views: '12.5K',
		status: 'Published',
	},
	{
		blogId: 2,
		title: 'AI-Powered Healthcare: Transforming Patient Care',
		image:
			'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
		description:
			'Artificial intelligence is reshaping healthcare delivery through predictive diagnostics, personalized treatment plans, and robotic surgery.',
		date: '2025-12-12',
		userName: 'Michael Rodriguez',
		link: '/blog/ai-healthcare-transformation',
		category: 'AI & Health',
		readTime: '6 min read',
		views: '18.3K',
		status: 'Published',
	},
	{
		blogId: 3,
		title: '5G and Beyond: The Future of Wireless Connectivity',
		image:
			'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80',
		description:
			'The deployment of 5G networks is accelerating globally, enabling ultra-fast speeds and low latency that power IoT devices, autonomous vehicles, and smart cities.',
		date: '2025-12-10',
		userName: 'Emma Thompson',
		link: '/blog/5g-wireless-future',
		category: '5G & IoT',
		readTime: '7 min read',
		views: '9.2K',
		status: 'Published',
	},
];

export const commentsData = [
	{
		blogId: 1,
		id: 1,
		userName: 'Alex Johnson',
		userAvatar: 'AJ',
		comment:
			'This is a fascinating read! Quantum computing is truly going to revolutionize how we approach complex problems.',
		date: '2025-12-16',
		likes: 24,
		replies: [],
	},
	{
		id: 2,
		userName: 'Maria Garcia',
		userAvatar: 'MG',
		comment:
			"Great article! I'm particularly interested in the applications for drug discovery. Can't wait to see more developments in this space.",
		date: '2025-12-15',
		likes: 18,
		replies: [
			{
				id: 3,
				userName: 'Dr. Sarah Chen',
				userAvatar: 'SC',
				comment:
					"Thank you Maria! The pharmaceutical applications are indeed very promising. We'll be covering that in more detail in an upcoming article.",
				date: '2025-12-16',
				likes: 12,
			},
		],
	},
];

export interface Reply {
	id: number;
	userName: string;
	userAvatar: string;
	comment: string;
	date: string;
	likes: number;
}

export interface Comment {
	id: number;
	blogId?: number;
	userName: string;
	userAvatar: string;
	comment: string;
	date: string;
	likes: number;
	replies?: Reply[];
}
export interface BlogType {
	blogId: number;
	title: string;
	description: string;
	image: string;
	userName: string;
	link: string;
	category: string;
	readTime: string;
	views: string;
}

// export type BlogType = typeof blogData;
export type Blog = (typeof blogData)[number];

export type CommentType = typeof commentsData;
export type CommentIdType = (typeof commentsData)[number];
