import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { PropsWithChildren } from 'react';

const LandingPageLayout = ({ children }: PropsWithChildren) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default LandingPageLayout;
