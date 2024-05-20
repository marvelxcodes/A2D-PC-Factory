import Image from 'next/image';

type FeedbackCardProps = {
	image: string;
	name: string;
	designation: string;
	feedback: string;
};

const FeedbackCard = ({
	image,
	name,
	feedback,
	designation
}: FeedbackCardProps) => {
	return (
		<div className='bg-gradient-to-bl p-6 space-y-3 shadow shadow-neutral-700 from-neutral-950 to-neutral-900 h-64 rounded-2xl'>
			<div className='flex items-center gap-x-3'>
				<div className='rounded-xl h-12 w-12 bg-white overflow-hidden'>
					<Image
						className='object-cover h-full w-full'
						src={image}
						height={60}
						width={60}
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
				<p className='font-medium text-xl text-neutral-400'>{feedback}</p>
			</div>
		</div>
	);
};

export default FeedbackCard;
