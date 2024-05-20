import Image from 'next/image';
import Button from './Button';
import Link from 'next/link';

const Header = () => {
	return (
		<div className='fixed top-0 h-20 z-50 w-screen border-b border-neutral-700 backdrop-blur-lg'>
			<div className='container mx-auto flex h-full px-3'>
				<div className='flex items-center flex-1 gap-x-3'>
					<Image
						className='overflow-hidden'
						src={'/logo.png'}
						height={48}
						width={48}
						alt='a2d pc factory logo'
					/>
					<Link
						href='/'
						className='text-2xl max-sm:hidden text-white font-semibold transition-colors hover:text-accent'
					>
						A2D PC Factory
					</Link>
				</div>
				<div className='flex items-center'>
					<Button className='inline-flex gap-x-1 items-center font-medium'>
						Get a Quote
						<Image
							src={'/icons/rupee.svg'}
							alt='rupee icon'
							height={18}
							width={18}
						/>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Header;
