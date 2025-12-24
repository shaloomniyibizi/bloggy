import { mutation } from './_generated/server';

export const seedAll = mutation({
	args: {},
	handler: async (ctx) => {
		// Clear existing data
		const blogs = await ctx.db.query('blogs').collect();
		const comments = await ctx.db.query('comments').collect();

		for (const comment of comments) {
			await ctx.db.delete(comment._id);
		}
		for (const blog of blogs) {
			await ctx.db.delete(blog._id);
		}

		// Insert 10 blogs with detailed descriptions
		const blog1Id = await ctx.db.insert('blogs', {
			title: 'The Rise of Quantum Computing: Breaking Traditional Barriers',
			image:
				'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80',
			description:
				'Quantum computing represents a paradigm shift in computational technology, leveraging the principles of quantum mechanics to process information in ways that classical computers simply cannot match. Unlike traditional bits that exist in states of 0 or 1, quantum bits or qubits can exist in multiple states simultaneously through a phenomenon called superposition. This fundamental difference allows quantum computers to explore vast solution spaces in parallel, making them exceptionally powerful for specific types of problems. Major tech companies like IBM, Google, and Microsoft are investing billions in quantum research, with Google claiming quantum supremacy in 2019 when their Sycamore processor completed a calculation in 200 seconds that would take classical supercomputers 10,000 years. The implications are profound: from breaking current encryption methods to discovering new materials, optimizing complex logistics networks, and accelerating drug discovery processes. However, quantum computers are incredibly fragile, requiring near absolute zero temperatures and sophisticated error correction. As we stand on the brink of the quantum era, industries from finance to pharmaceuticals are preparing for a future where quantum advantage becomes commercially viable.',
			date: '2025-12-20',
			userName: 'Dr. Sarah Chen',
			link: '/blog/quantum-computing-rise',
			category: 'Quantum Tech',
			readTime: '12 min read',
			views: '24.5K',
			status: 'Published',
		});

		const blog2Id = await ctx.db.insert('blogs', {
			title:
				'AI-Powered Healthcare: Transforming Patient Care and Medical Diagnosis',
			image:
				'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
			description:
				'Artificial intelligence is revolutionizing healthcare delivery across every dimension of patient care, from initial diagnosis to treatment planning and long-term monitoring. Machine learning algorithms trained on millions of medical images can now detect cancers, fractures, and anomalies with accuracy that matches or exceeds experienced radiologists, often identifying subtle patterns that human eyes might miss. Natural language processing systems parse through thousands of medical journals and patient records to assist doctors in making evidence-based treatment decisions. Predictive analytics models analyze patient data to forecast potential health crises before they occur, enabling preventive interventions that save lives and reduce costs. Robotic surgery systems guided by AI provide unprecedented precision in complex procedures, minimizing invasiveness and recovery times. Drug discovery, traditionally a decade-long process costing billions, is being accelerated through AI-powered molecular modeling that can predict drug efficacy and side effects in silico. Telemedicine platforms enhanced with AI triage systems ensure patients receive appropriate care levels, reducing emergency room overcrowding. Personalized medicine is becoming reality as AI analyzes genetic profiles to recommend tailored treatment protocols. However, challenges remain around data privacy, algorithmic bias, regulatory frameworks, and the critical need to maintain the human touch in healthcare.',
			date: '2025-12-18',
			userName: 'Michael Rodriguez',
			link: '/blog/ai-healthcare-transformation',
			category: 'AI & Health',
			readTime: '10 min read',
			views: '32.8K',
			status: 'Published',
		});

		const blog3Id = await ctx.db.insert('blogs', {
			title:
				'5G and Beyond: The Future of Wireless Connectivity and IoT Revolution',
			image:
				'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80',
			description:
				"The global rollout of 5G networks is not just an incremental upgrade—it's a foundational technology that will reshape how we live, work, and interact with the digital world. With theoretical speeds up to 100 times faster than 4G, latency reduced to mere milliseconds, and the capacity to connect millions of devices per square kilometer, 5G enables applications that were previously impossible. Smart cities are leveraging 5G to deploy interconnected systems for traffic management, energy distribution, waste collection, and public safety, creating urban environments that respond intelligently to real-time conditions. Autonomous vehicles require the ultra-low latency and high reliability that only 5G can provide, enabling vehicle-to-vehicle and vehicle-to-infrastructure communication at speeds necessary for safe operation. Industrial IoT applications are transforming manufacturing through predictive maintenance, digital twins, and automated quality control, while remote surgery becomes feasible with high-bandwidth, low-latency connections. The entertainment industry is exploring immersive experiences through AR and VR that demand 5G's bandwidth. Agriculture is becoming precision-driven with sensor networks monitoring crop health, soil conditions, and automated irrigation. Yet challenges persist: infrastructure deployment costs are enormous, spectrum allocation creates geopolitical tensions, security concerns around network architecture require new approaches, and the energy consumption of dense 5G networks raises environmental questions that the industry must address.",
			date: '2025-12-15',
			userName: 'Emma Thompson',
			link: '/blog/5g-wireless-future',
			category: '5G & IoT',
			readTime: '11 min read',
			views: '28.3K',
			status: 'Published',
		});

		const blog4Id = await ctx.db.insert('blogs', {
			title:
				'Blockchain Beyond Cryptocurrency: Enterprise Applications and Smart Contracts',
			image:
				'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
			description:
				'While blockchain technology first gained prominence through Bitcoin and cryptocurrencies, its potential extends far beyond digital money into transforming how businesses operate, how supply chains function, and how trust is established in digital transactions. At its core, blockchain provides an immutable, distributed ledger that creates transparency and eliminates the need for intermediaries in many transactions. Enterprise blockchain platforms like Hyperledger Fabric and Ethereum Enterprise are being adopted by major corporations for supply chain traceability, enabling consumers to verify product authenticity and ethical sourcing from raw materials to retail. Smart contracts—self-executing agreements with terms directly written into code—are automating complex business processes in insurance claims, real estate transactions, and international trade, reducing processing times from weeks to minutes while eliminating human error and fraud. Financial institutions are exploring blockchain for cross-border payments, securities settlement, and trade finance, potentially saving billions in transaction costs. Healthcare systems are piloting blockchain for secure patient data sharing while maintaining privacy. Governments are testing blockchain-based voting systems, land registries, and identity management solutions. Decentralized finance (DeFi) platforms are creating new financial instruments and services outside traditional banking systems. However, enterprise adoption faces hurdles including scalability limitations, energy consumption concerns, regulatory uncertainty, interoperability challenges between different blockchain networks, and the need for standardization across industries.',
			date: '2025-12-12',
			userName: 'James Liu',
			link: '/blog/blockchain-enterprise-applications',
			category: 'Blockchain',
			readTime: '13 min read',
			views: '19.7K',
			status: 'Published',
		});

		const blog5Id = await ctx.db.insert('blogs', {
			title:
				'Cybersecurity in the Age of AI: New Threats and Defense Strategies',
			image:
				'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
			description:
				'The cybersecurity landscape is evolving at breakneck speed as both attackers and defenders leverage artificial intelligence to gain advantages in an ongoing digital arms race. AI-powered threats are becoming increasingly sophisticated: deepfake technology creates convincing audio and video forgeries that can impersonate executives for business email compromise attacks, automated vulnerability scanners discover and exploit security flaws faster than human analysts can patch them, and adversarial machine learning techniques can poison training data or evade detection systems. Ransomware operations have become professionalized businesses with customer support and service level agreements, while state-sponsored advanced persistent threats conduct espionage campaigns of unprecedented scale and stealth. Simultaneously, AI is revolutionizing defensive capabilities: behavioral analytics detect anomalies in network traffic patterns that indicate breaches, automated response systems contain threats in milliseconds, natural language processing analyzes threat intelligence from millions of sources to predict emerging attack vectors, and security orchestration platforms coordinate defensive measures across complex enterprise environments. Zero-trust architecture is replacing perimeter-based security models, assuming breach and requiring continuous verification of every access request. Quantum computing looms as both threat and opportunity—threatening to break current encryption while promising quantum-resistant cryptography. Organizations face critical challenges in securing cloud environments, protecting IoT devices, managing insider threats, addressing the cybersecurity skills gap, and balancing security with user experience. The future of cybersecurity requires not just technological solutions but fundamental shifts in organizational culture, international cooperation on cyber norms, and regulatory frameworks that keep pace with technological change.',
			date: '2025-12-10',
			userName: 'Rachel Morrison',
			link: '/blog/ai-cybersecurity-threats',
			category: 'Cybersecurity',
			readTime: '14 min read',
			views: '41.2K',
			status: 'Published',
		});

		const blog6Id = await ctx.db.insert('blogs', {
			title:
				'The Metaverse Economy: Virtual Real Estate, Digital Assets, and New Business Models',
			image:
				'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&q=80',
			description:
				'The metaverse represents a convergence of virtual reality, augmented reality, blockchain, and social networking that is creating entirely new economic paradigms where digital experiences and assets hold real-world value. Virtual real estate in platforms like Decentraland, The Sandbox, and Roblox has sold for millions of dollars, with brands like Gucci, Nike, and Samsung establishing virtual storefronts and experiences. Digital fashion is emerging as a significant industry where people spend real money on virtual clothing for their avatars, with some digital garments selling for more than their physical counterparts. NFTs (non-fungible tokens) have created verifiable digital ownership, enabling artists, musicians, and creators to monetize their work in new ways while maintaining control and earning royalties on secondary sales. Virtual concerts and events attract millions of attendees, generating revenue through ticket sales, virtual merchandise, and branded experiences. Companies are experimenting with virtual offices and collaboration spaces that transcend physical limitations, potentially reshaping remote work culture. Gaming economies where players earn cryptocurrency through play-to-earn models are creating new livelihoods, particularly in developing nations. Virtual influencers and AI-generated personalities are securing brand partnerships and building audiences. However, the metaverse faces significant challenges: the technology remains nascent with clunky user experiences, interoperability between different platforms is limited, concerns about addiction and mental health effects are growing, questions of governance and content moderation are unresolved, environmental impacts of blockchain transactions need addressing, and accessibility issues could create new forms of digital inequality. The metaverse economy is in its infancy, but its trajectory suggests profound implications for how we define value, community, and reality itself.',
			date: '2025-12-08',
			userName: 'David Park',
			link: '/blog/metaverse-economy-digital-assets',
			category: 'Metaverse',
			readTime: '15 min read',
			views: '36.9K',
			status: 'Published',
		});

		const blog7Id = await ctx.db.insert('blogs', {
			title:
				'Sustainable Technology: Green Computing and the Climate Tech Revolution',
			image:
				'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
			description:
				"As climate change accelerates and technology's environmental footprint grows, the tech industry faces mounting pressure to develop sustainable solutions while reducing its own carbon emissions. Data centers, which power our digital lives, consume approximately 1% of global electricity, prompting major tech companies to commit to carbon neutrality and renewable energy. Innovations in cooling systems, server efficiency, and AI-optimized workload distribution are reducing energy consumption per computation. Meanwhile, climate tech startups are leveraging artificial intelligence, IoT sensors, and satellite imagery to address environmental challenges: precision agriculture platforms optimize water usage and reduce pesticide application, smart grids balance renewable energy supply and demand, carbon capture technologies are being enhanced with machine learning, and supply chain optimization algorithms minimize transportation emissions. Circular economy principles are being embedded into product design, with companies like Fairphone creating modular, repairable devices that challenge planned obsolescence. Blockchain is enabling transparent carbon credit markets and renewable energy trading. Battery technology breakthroughs are making electric vehicles more viable while grid-scale energy storage solutions address renewable energy intermittency. However, the technology sector must confront uncomfortable truths: cryptocurrency mining consumes enormous energy, the rapid obsolescence cycle creates electronic waste crises, rare earth mineral extraction for electronics causes environmental damage, and the energy demands of training large AI models are substantial. The path forward requires not just technological innovation but systemic changes in how we design, produce, consume, and dispose of technology, coupled with policy frameworks that incentivize sustainability and hold companies accountable for their environmental impact.",
			date: '2025-12-05',
			userName: 'Dr. Aisha Patel',
			link: '/blog/sustainable-tech-green-computing',
			category: 'Sustainability',
			readTime: '13 min read',
			views: '27.4K',
			status: 'Published',
		});

		const blog8Id = await ctx.db.insert('blogs', {
			title:
				'Edge Computing and the Distributed Cloud: Processing Power at the Network Edge',
			image:
				'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
			description:
				"Edge computing is fundamentally reshaping cloud architecture by moving computation and data storage closer to where data is generated and consumed, addressing latency, bandwidth, and privacy concerns that centralized cloud models cannot solve. Instead of sending all data to distant data centers for processing, edge computing distributes intelligence across networks—to IoT devices, local servers, and telecommunications infrastructure. This architecture is critical for applications requiring real-time responses: autonomous vehicles process sensor data locally to make split-second decisions, augmented reality applications render content without noticeable lag, industrial robots coordinate in manufacturing environments, and retail stores analyze customer behavior for instant personalization. Telecommunications companies are deploying multi-access edge computing (MEC) infrastructure that brings cloud capabilities to the edge of 5G networks, enabling new services and revenue streams. Content delivery networks are evolving into edge computing platforms that don't just cache content but execute application logic. Privacy-conscious organizations are leveraging edge computing to process sensitive data locally, minimizing transmission of personal information. However, edge computing introduces new complexities: managing distributed infrastructure at scale requires sophisticated orchestration, security models must protect thousands of edge nodes from attack, applications must be redesigned to function across distributed environments, and the cost-benefit analysis differs significantly from traditional cloud deployments. Hybrid architectures combining centralized cloud, edge computing, and on-premises infrastructure are emerging as the dominant pattern, requiring new tools for monitoring, debugging, and optimizing performance across heterogeneous environments. As 5G deployment accelerates and IoT devices proliferate, edge computing will become increasingly central to digital infrastructure.",
			date: '2025-12-03',
			userName: 'Marcus Chen',
			link: '/blog/edge-computing-distributed-cloud',
			category: 'Cloud Computing',
			readTime: '12 min read',
			views: '22.1K',
			status: 'Published',
		});

		const blog9Id = await ctx.db.insert('blogs', {
			title:
				'Neural Interfaces and Brain-Computer Integration: The Next Frontier of Human-Computer Interaction',
			image:
				'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800&q=80',
			description:
				"Brain-computer interfaces (BCIs) are transitioning from science fiction to reality, promising to revolutionize how humans interact with technology and potentially augment human cognitive capabilities. Companies like Neuralink, Synchron, and Paradromics are developing implantable devices that can read neural signals with unprecedented precision, while non-invasive alternatives using EEG and fNIRS technologies offer safer but less detailed brain activity monitoring. Medical applications are the current frontier: paralyzed patients are using BCIs to control robotic limbs, type messages, and even regain some independence, while researchers explore treatments for depression, epilepsy, and neurodegenerative diseases through targeted neural stimulation. The technology works by decoding patterns in brain activity—when you think about moving your arm, specific neurons fire in characteristic patterns that algorithms can learn to interpret and translate into computer commands. Machine learning has been crucial to advancing BCI technology, as neural networks can adapt to individual users' brain signals and improve accuracy over time. Beyond medical applications, consumer BCIs are emerging for gaming, meditation assistance, and productivity enhancement, though current capabilities remain limited. The long-term vision extends to memory augmentation, direct brain-to-brain communication, and downloading information directly to the brain—possibilities that raise profound ethical questions. Concerns span privacy (can neural data be hacked?), consent (especially for enhancement rather than treatment), equity (will BCIs create a cognitively enhanced elite?), identity (how do neural implants affect our sense of self?), and security (could BCIs be used for surveillance or manipulation?). Regulatory frameworks are struggling to keep pace with technological advancement, and societal discussions about appropriate use cases, safety standards, and the very nature of human enhancement are urgently needed as this technology matures.",
			date: '2025-12-01',
			userName: 'Dr. Nina Kowalski',
			link: '/blog/neural-interfaces-brain-computer',
			category: 'Neurotechnology',
			readTime: '16 min read',
			views: '45.6K',
			status: 'Published',
		});

		const blog10Id = await ctx.db.insert('blogs', {
			title:
				'The Future of Work: AI Automation, Remote Collaboration, and Skills for Tomorrow',
			image:
				'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
			description:
				"The nature of work is undergoing its most significant transformation since the Industrial Revolution, driven by artificial intelligence automation, remote collaboration technologies, and rapidly evolving skill requirements. AI and robotics are automating not just routine manual tasks but increasingly sophisticated cognitive work—from legal document review to financial analysis, medical diagnosis to software development. This technological displacement is occurring faster than previous industrial transitions, creating urgent questions about workforce adaptation and social safety nets. Simultaneously, the pandemic accelerated remote work adoption, proving that many jobs don't require physical presence and opening global talent pools while challenging traditional management practices and corporate culture. Hybrid work models are now standard in knowledge industries, supported by sophisticated collaboration platforms that blend asynchronous and synchronous communication, virtual whiteboards, and AI-powered productivity tools. The skills demanded by employers are shifting dramatically: while technical abilities remain important, uniquely human capabilities like creativity, emotional intelligence, complex problem-solving, and adaptability are becoming more valuable as routine cognitive work is automated. Lifelong learning is transitioning from aspiration to necessity as career trajectories become non-linear and skills require constant updating. Educational institutions are struggling to prepare students for jobs that don't yet exist, while corporate learning and development programs race to reskill existing workforces. The gig economy and platform work are creating flexibility but also precarity, raising questions about benefits, worker protections, and employment classification. Some envision a future where universal basic income addresses technological unemployment, while others see new categories of work emerging around human-AI collaboration. What seems certain is that the social contract around work—expectations about career progression, employer-employee relationships, work-life balance, and the role of work in identity and purpose—is being fundamentally renegotiated. Organizations that successfully navigate this transition will be those that view their workforce as continuously evolving, invest in human capital development, embrace flexible work arrangements, and thoughtfully integrate human capabilities with AI augmentation rather than simply pursuing automation for cost reduction.",
			date: '2025-11-28',
			userName: 'Jennifer Torres',
			link: '/blog/future-of-work-ai-automation',
			category: 'Future of Work',
			readTime: '14 min read',
			views: '52.3K',
			status: 'Published',
		});

		// Insert comments for multiple blogs

		// Comments for Blog 1 (Quantum Computing)
		const comment1_1Id = await ctx.db.insert('comments', {
			blogId: blog1Id,
			userName: 'Alex Johnson',
			userAvatar: 'AJ',
			comment:
				"This is an exceptionally comprehensive overview of quantum computing! I've been following the field for years, and your explanation of superposition and quantum advantage is one of the clearest I've encountered. The mention of Google's quantum supremacy claim is particularly relevant.",
			date: '2025-12-21',
			likes: 156,
		});

		const comment1_2Id = await ctx.db.insert('comments', {
			blogId: blog1Id,
			userName: 'Maria Garcia',
			userAvatar: 'MG',
			comment:
				"Great article! I'm particularly fascinated by the applications in drug discovery. The ability to simulate molecular interactions at the quantum level could revolutionize pharmaceutical development and save countless lives.",
			date: '2025-12-20',
			likes: 89,
		});

		await ctx.db.insert('comments', {
			blogId: blog1Id,
			userName: 'Dr. Sarah Chen',
			userAvatar: 'SC',
			comment:
				"Thank you Maria! You're absolutely right. The pharmaceutical applications are incredibly promising. We're planning a deep-dive article specifically on quantum computing in drug discovery and molecular simulation.",
			date: '2025-12-21',
			likes: 67,
			parentCommentId: comment1_2Id,
		});

		// Comments for Blog 2 (AI Healthcare)
		const comment2_1Id = await ctx.db.insert('comments', {
			blogId: blog2Id,
			userName: 'Thomas Wright',
			userAvatar: 'TW',
			comment:
				'As a healthcare professional, I can confirm that AI diagnostic tools are genuinely transforming our daily practice. However, we must be cautious about over-reliance and ensure these systems augment rather than replace clinical judgment.',
			date: '2025-12-19',
			likes: 203,
		});

		await ctx.db.insert('comments', {
			blogId: blog2Id,
			userName: 'Priya Sharma',
			userAvatar: 'PS',
			comment:
				'The section on personalized medicine really resonates with me. My family has a history of genetic conditions, and the idea that AI could help tailor treatments specifically to our genetic profiles is incredibly hopeful.',
			date: '2025-12-18',
			likes: 124,
		});

		await ctx.db.insert('comments', {
			blogId: blog2Id,
			userName: 'Michael Rodriguez',
			userAvatar: 'MR',
			comment:
				"Thanks for sharing your perspective, Thomas. You're absolutely right—the goal is augmentation, not replacement. Human empathy and clinical experience remain irreplaceable in patient care.",
			date: '2025-12-19',
			likes: 91,
			parentCommentId: comment2_1Id,
		});

		// Comments for Blog 5 (Cybersecurity)
		const comment5_1Id = await ctx.db.insert('comments', {
			blogId: blog5Id,
			userName: 'Kevin Martinez',
			userAvatar: 'KM',
			comment:
				"This article brilliantly captures the current state of the cybersecurity arms race. The deepfake threat is particularly concerning—we've already seen several high-profile cases of executive impersonation leading to significant financial fraud.",
			date: '2025-12-11',
			likes: 178,
		});

		await ctx.db.insert('comments', {
			blogId: blog5Id,
			userName: 'Lisa Anderson',
			userAvatar: 'LA',
			comment:
				'As someone working in zero-trust architecture implementation, I appreciate how you emphasized the paradigm shift from perimeter security. Traditional castle-and-moat approaches are simply inadequate for modern threat landscapes.',
			date: '2025-12-11',
			likes: 145,
		});

		// Comments for Blog 9 (Neural Interfaces)
		const comment9_1Id = await ctx.db.insert('comments', {
			blogId: blog9Id,
			userName: 'Sophie Laurent',
			userAvatar: 'SL',
			comment:
				'This is both exciting and terrifying. The medical applications for paralysis and neurodegenerative diseases are extraordinary, but I share your concerns about privacy and the potential for neural data exploitation.',
			date: '2025-12-02',
			likes: 267,
		});

		await ctx.db.insert('comments', {
			blogId: blog9Id,
			userName: 'Robert Kim',
			userAvatar: 'RK',
			comment:
				"The ethical questions you raise are crucial. Who owns our neural data? How do we regulate cognitive enhancement? These aren't just technical questions but fundamental challenges to how we define human rights and personhood.",
			date: '2025-12-01',
			likes: 198,
		});

		// Comments for Blog 10 (Future of Work)
		await ctx.db.insert('comments', {
			blogId: blog10Id,
			userName: 'Emily Watson',
			userAvatar: 'EW',
			comment:
				'This article perfectly articulates the anxiety many workers feel about automation while also highlighting the opportunities. The emphasis on uniquely human skills like creativity and emotional intelligence gives me hope for the future.',
			date: '2025-11-29',
			likes: 312,
		});

		return {
			message:
				'10 blogs with detailed descriptions and comments seeded successfully',
			blogsCount: 10,
			commentsCount: 12,
		};
	},
});
