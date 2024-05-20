import Image from 'next/image';

type FeedbackCardProps = {
	icon: string;
	name: string;
	designation: string;
	feedback: string;
};

const FeedbackCard = ({
	icon,
	name,
	feedback,
	designation
}: FeedbackCardProps) => {
	return (
		<div className='bg-gradient-to-bl p-6 space-y-3 shadow shadow-neutral-700 from-neutral-950 to-neutral-900 h-64 rounded-2xl'>
			<div className='flex items-center gap-x-3'>
				<div className='rounded-xl bg-white overflow-hidden'>
					<Image
						src={icon}
						height={52}
						width={52}
						alt='icon'
					/>
				</div>
				<div>
					<span className='text-white block font-medium text-xl'>{name}</span>
					<span className='text-sm text-amber-500 block font-medium'>
						{designation}
					</span>
				</div>
			</div>
			<div>
				<p className='font-medium text-neutral-400'>{feedback}</p>
			</div>
		</div>
	);
};

export default FeedbackCard;
