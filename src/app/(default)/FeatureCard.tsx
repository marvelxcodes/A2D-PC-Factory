import Image from 'next/image';

type FeatureCardProps = {
	icon: string;
	heading: string;
	children: string;
};

const FeatureCard = ({ icon, heading, children }: FeatureCardProps) => {
	return (
		<div className='bg-gradient-to-bl p-6 space-y-3 shadow shadow-neutral-700 from-neutral-950 to-neutral-900 h-64 rounded-2xl'>
			<div className='flex items-center gap-x-3'>
				<div className='rounded-xl bg-amber-500 p-3'>
					<Image
						src={icon}
						height={28}
						width={28}
						alt='icon'
					/>
				</div>
				<span className='text-white font-medium text-xl'>{heading}</span>
			</div>
			<div>
				<p className='font-medium text-neutral-400'>{children}</p>
			</div>
		</div>
	);
};

export default FeatureCard;
