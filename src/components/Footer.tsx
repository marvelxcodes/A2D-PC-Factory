import Image from 'next/image';

const Footer = () => {
	return (
		<footer className='shadow shadow-neutral-400 bg-gradient-to-r'>
			<div className='container py-8 mx-auto text-white grid grid-cols-3'>
				{/* Branding Section */}
				<div className='space-y-6'>
					<div className='flex gap-x-3'>
						<div>
							<Image
								src={'/logo.png'}
								height={120}
								width={120}
								alt='a2d pc factory logo'
							/>
						</div>
						<div>
							<h3 className='text-2xl font-medium text-amber-500'>
								A2D PC Factory
							</h3>
							<p className='font-medium'>
								We are PC Builders and Tech Content Creator based in Tamil Nadu
							</p>
						</div>
					</div>
					{/* Social Media links */}
					<div className='flex gap-x-6 justify-center'>
						<a
							target='_blank'
							href='https://www.youtube.com/@A2DChannel'
						>
							<Image
								className='invert'
								width={32}
								height={32}
								src={'/socials/youtube.png'}
								alt='youtube icon'
							/>
						</a>
						<a
							target='_blank'
							href='http://www.instagram.com/a2dpcfactory'
						>
							<Image
								className='invert'
								width={32}
								height={32}
								src={'/socials/instagram.png'}
								alt=' icon'
							/>
						</a>
						<a
							target='_blank'
							href='http://'
						>
							<Image
								className='invert'
								width={32}
								height={32}
								src={'/socials/facebook.png'}
								alt=' icon'
							/>
						</a>
						<a
							target='_blank'
							href='http://'
						>
							<Image
								className='invert'
								width={32}
								height={32}
								src={'/socials/x.png'}
								alt='x icon'
							/>
						</a>
					</div>
				</div>

				{/* Links Section */}
				<div className='space-y-4 grid justify-center'>
					<h3 className='text-2xl font-medium text-amber-500'>Other Links</h3>
					<ul className='space-y-1 grid justify-center'>
						<li>About Us</li>
						<li>Contact US</li>
						<li>Privacy Policies</li>
						<li>Shipping Policies</li>
						<li>Terms and Conditions</li>
					</ul>
				</div>

				{/* Contact Section */}
				<div className='space-y-4'>
					<h3 className='text-2xl font-medium text-amber-500'>Contact Us</h3>
					<ul className='space-y-3'>
						<li className='flex gap-x-2'>
							<div>
								<Image
									src={'/icons/home.svg'}
									height={24}
									width={24}
									alt='location icon'
								/>
							</div>
							<span>Kundrathur, Chennai - 600069</span>
						</li>
						<li className='flex gap-x-2'>
							<div>
								<Image
									src={'/icons/phone.svg'}
									height={24}
									width={24}
									alt='phone icon'
								/>
							</div>
							<ul>
								<a href='tel:+919025380083'>
									<li>+91 9445747768</li>
								</a>
								<a href='tel:+919025380083'>
									<li>+91 9025380083</li>
								</a>
							</ul>
						</li>
						<li className='flex gap-x-2'>
							<div>
								<Image
									src={'/icons/email.svg'}
									height={24}
									width={24}
									alt='email icon'
								/>
							</div>
							<span>enquiries@a2dpcfactory.com</span>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
