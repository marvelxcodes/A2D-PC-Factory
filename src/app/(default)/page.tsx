import Image from 'next/image';
import videos from '@/content/videos';
import Button from '@/components/Button';
import YouTubePlayer from '@/lib/YoutubePlayer';
import FeatureCard from './FeatureCard';
import FeedbackCard from './FeedbackCard';

export default function Home() {
	return (
		<main className='mt-20'>
			{/* Hero Section */}
			<section className='mx-auto container px-3'>
				<div className='flex flex-col py-16 space-y-6'>
					<span className='uppercase text-amber-500 font-semibold text-lg tracking-[0.3rem]'>
						A Custom PC Building Company
					</span>
					<h1 className='text-5xl md:text-8xl font-semibold text-white'>
						Unleash your Gaming Desire with our{' '}
						<span className='bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-700'>
							Custom PCs
						</span>
					</h1>
					<p className='text-2xl font-medium max-w-2xl text-gray-200'>
						Custom-built PCs designed to meet your exact needs. Experience
						unmatched performance, superior quality, and personalized service
						with our expert custom PC building solutions.
					</p>
					<a
						target='_blank'
						href='https://api.whatsapp.com/send/?phone=%2B919025380083&text&type=phone_number'
					>
						<Button className='rounded-full inline-flex gap-x-1 items-center text-xl px-6'>
							Build your own PC
							<Image
								src={'/icons/build.svg'}
								alt='rupee icon'
								height={20}
								width={20}
							/>
						</Button>
					</a>
				</div>
			</section>

			{/* Customers Section */}
			<section className='mx-auto container'>
				<div className='flex flex-col py-16 space-y-6'>
					<h2 className='text-6xl font-semibold text-white'>
						Whom we have build{' '}
						<span className='bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-700'>
							Custom PCs for?
						</span>
					</h2>

					<div className='flex flex-col'>
						<div></div>
					</div>
				</div>
			</section>

			{/* Process Section */}
			<section className='mx-auto container'>
				<div className='flex flex-col py-16 space-y-6'>
					<h2 className='text-6xl font-semibold text-white'>
						What is our{' '}
						<span className='bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-700'>
							PC Building Process?
						</span>
					</h2>

					<div className='px-6 py-8 flex gap-x-6'>
						<div>
							<div className='py-3'>
								<div className='w-1 items-center bg-[linear-gradient(0deg,_rgba(0,0,0,1)_0%,_rgba(245,158,11,0.6)_50%,_rgba(0,0,0,1)_100%)] flex flex-col h-96 justify-between'>
									<div className='rounded-full bg-neutral-600 p-1 w-5 h-5'>
										<div className='rounded-full bg-black w-full h-full' />
									</div>
								</div>
								<div className='w-1 items-center bg-[linear-gradient(0deg,_rgba(0,0,0,1)_0%,_rgba(245,158,11,0.6)_50%,_rgba(0,0,0,1)_100%)] flex flex-col h-96 justify-between'>
									<div className='rounded-full bg-neutral-600 p-1 w-5 h-5'>
										<div className='rounded-full bg-black w-full h-full' />
									</div>
								</div>
								<div className='w-1 items-center bg-[linear-gradient(0deg,_rgba(0,0,0,1)_0%,_rgba(245,158,11,0.6)_50%,_rgba(0,0,0,1)_100%)] flex flex-col h-96 justify-between'>
									<div className='w-6 h-6'>
										<Image
											width={40}
											height={40}
											alt='build icon'
											src={'/icons/build.svg'}
										/>
									</div>
								</div>
								<div className='w-1 items-center bg-[linear-gradient(0deg,_rgba(0,0,0,1)_0%,_rgba(245,158,11,0.6)_50%,_rgba(0,0,0,1)_100%)] flex flex-col h-96'>
									<div className='rounded-full bg-neutral-600 p-1 w-5 h-5'>
										<div className='rounded-full bg-black w-full h-full' />
									</div>
								</div>
								<div className='w-1 items-center bg-[linear-gradient(0deg,_rgba(0,0,0,1)_0%,_rgba(245,158,11,0.6)_50%,_rgba(0,0,0,1)_100%)] flex flex-col h-96 justify-between'>
									<div className='w-6 h-6'>
										<Image
											width={40}
											height={40}
											alt='build icon'
											src={'/icons/package.svg'}
										/>
									</div>
								</div>
							</div>
						</div>

						<div>
							<div className='h-96 space-y-3'>
								<h3 className='text-white text-4xl font-medium'>
									Discuss your requirements
								</h3>
								<p className='text-neutral-400  text-2xl font-medium max-w-2xl'>
									Understand your requirements and preferences through a
									detailed consultation.
								</p>
								<p className='text-neutral-400  text-2xl font-medium max-w-2xl'>
									Provide expert advice on selecting components and
									configurations tailored to your needs.
								</p>
								<p className='text-neutral-400  text-2xl font-medium max-w-2xl'>
									Ensure the proposed solutions fit within your budget without
									compromising on quality.
								</p>
							</div>
							<div className='h-96 space-y-3'>
								<h3 className='text-white text-4xl font-medium'>
									Analyze the components
								</h3>
								<p className='text-neutral-400  text-2xl font-medium max-w-2xl'>
									Choose the best parts for optimal performance and reliability
									based on your requirements.
								</p>
								<p className='text-neutral-400  text-2xl font-medium max-w-2xl'>
									Ensure all selected components work seamlessly together to
									avoid any compatibility issues.
								</p>
								<p className='text-neutral-400  text-2xl font-medium max-w-2xl'>
									Tailor the specifications to maximize performance for your
									specific use case and needs.
								</p>
								<Button className='text-xl px-6'>Check Our Team</Button>
							</div>
							<div className='h-96 space-y-3'>
								<h3 className='text-white text-4xl font-medium'>
									Build the Custom PC
								</h3>
								<p className='text-neutral-400  text-2xl font-medium max-w-2xl'>
									Expertly assemble your custom PC with attention to detail and
									precision.
								</p>
								<p className='text-neutral-400  text-2xl font-medium max-w-2xl'>
									Organize cables for optimal airflow, aesthetics, and easy
									future upgrades.
								</p>
								<p className='text-neutral-400  text-2xl font-medium max-w-2xl'>
									Ensure every component is installed perfectly for a clean,
									efficient build.
								</p>
							</div>
							<div className='h-96 space-y-3'>
								<h3 className='text-white text-4xl font-medium'>
									Test if everything works fine
								</h3>
								<p className='text-neutral-400  text-2xl font-medium max-w-2xl'>
									Run benchmarks to ensure your PC performs at peak levels.
								</p>
								<p className='text-neutral-400  text-2xl font-medium max-w-2xl'>
									Conduct stress tests to verify reliability and durability
									under various conditions.
								</p>
								<p className='text-neutral-400  text-2xl font-medium max-w-2xl'>
									Verify that the final build meets all specifications and
									quality standards.
								</p>
							</div>
							<div className='h-96 space-y-3'>
								<h3 className='text-white text-4xl font-medium'>
									Deliver to you
								</h3>
								<p className='text-neutral-400  text-2xl font-medium max-w-2xl'>
									Safely pack your custom PC for secure delivery to your
									doorstep.
								</p>
								<p className='text-neutral-400  text-2xl font-medium max-w-2xl'>
									Ship directly to your address all over India.
								</p>
								<p className='text-neutral-400  text-2xl font-medium max-w-2xl'>
									Provide support to help you get started and ensure everything
									works perfectly.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className='mx-auto container'>
				<div className='flex flex-col py-16 space-y-6'>
					<h2 className='text-6xl font-semibold text-white'>
						Why should you choose{' '}
						<span className='bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-700'>
							A2D PC Factory?
						</span>
					</h2>

					<div className='grid grid-cols-3 gap-6 py-6'>
						<FeatureCard
							icon='/icons/support.svg'
							heading='Lifetime Technical Support'
						>
							Our commitment doesn’t end at the sale. We provide ongoing
							technical support to keep your PC running smoothly.
						</FeatureCard>
						<FeatureCard
							icon='/icons/support.svg'
							heading='Lifetime Technical Support'
						>
							Our commitment doesn’t end at the sale. We provide ongoing
							technical support to keep your PC running smoothly.
						</FeatureCard>
						<FeatureCard
							icon='/icons/support.svg'
							heading='Lifetime Technical Support'
						>
							Our commitment doesn’t end at the sale. We provide ongoing
							technical support to keep your PC running smoothly.
						</FeatureCard>
					</div>
				</div>
			</section>

			{/* Feedbacks Section */}
			<section className='mx-auto container'>
				<div className='flex flex-col py-16 space-y-6'>
					<h2 className='text-6xl font-semibold text-white'>
						What do our clients{' '}
						<span className='bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-700'>
							think about us?
						</span>
					</h2>

					<div className='grid grid-cols-3 gap-6 py-6'>
						<FeedbackCard
							icon=''
							name=''
							feedback=''
							designation=''
						/>
					</div>
				</div>
			</section>
		</main>
	);
}
