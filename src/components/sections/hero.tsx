import Image from 'next/image';
import { MapPin } from 'lucide-react';

import SocialIcons from '@/components/data-display/social-icons';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import HeroImage from '/public/images/code-typing.svg';

const HeroSection = () => {
  return (
		<Container id="hero">
			<div className="flex flex-col gap-12 md:flex-row">
				<div className="flex items-center justify-center md:order-last md:flex-grow md:justify-end">
					<div className="relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]">
						<Image
							src={HeroImage}
							alt="Headshot of Epifanio"
							className="absolute z-10 h-[280px] w-[240px] border-8 border-gray max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px]"
							style={{ objectFit: "cover" }}
						></Image>
						<div className="absolute h-[280px] w-[280px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:right-0 md:h-[320px] md:w-[280px]"></div>
					</div>
				</div>

				{/* Content */}
				<div className="flex max-w-3xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12">
					<div className="flex flex-col gap-2">
						<Typography variant="h1">
							Olá, eu sou o Epifânio{" "}
							<span className="inline-block animate-waving-hand">
								👋
							</span>
						</Typography>
						<Typography>
							Sou um desenvolvedor de software com mais de 3 anos
							de experiência em criar experiências digitais
							excepcionais, utilizando React.js e Node.js. Com
							foco em desenvolvimento web, já codifiquei uma
							variedade de websites e aplicações, sempre
							garantindo que sejam rápidos, acessíveis,
							visualmente apelativos e responsivos. Apesar do
							tempo de atuação, ainda sinto o mesmo entusiasmo de
							quando comecei.
						</Typography>
					</div>
					<div className="flex flex-col gap-2">
						<div className="flex gap-2">
							<MapPin className="stroke-gray-600" />
							<Typography>Luanda, Angola</Typography>
						</div>

						<div className="flex items-center gap-2">
							<div className="flex h-6 w-6 items-center justify-center">
								<span className="relative flex h-3 w-3">
									<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
									<span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
								</span>
							</div>
							<Typography>Disponível para novos projetos</Typography>
						</div>
					</div>
					<SocialIcons />
				</div>
			</div>
		</Container>
  );
};

export default HeroSection;
