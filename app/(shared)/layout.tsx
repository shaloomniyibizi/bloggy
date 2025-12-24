import { Header } from '@/components/web/header';

export default function SharedLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Header />
			{children}
		</>
	);
}
