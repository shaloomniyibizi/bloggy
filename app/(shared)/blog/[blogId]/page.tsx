import { BlogDetail } from '@/components/web/blog-details';
import { BlogIdType } from '@/lib/types/convex';

interface BlogIdPageProps {
	params: Promise<{ blogId: string }>;
}

export default async function BlogIdPage({ params }: BlogIdPageProps) {
	const { blogId } = (await params) as { blogId: BlogIdType };
	if (!blogId) return <div>Loading...</div>;
	return <BlogDetail blogId={blogId} />;
}
