import Image from 'next/image';

import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';

const AboutMeSection = () => {
  return (
		<Container className="bg-gray-50" id="about">
			<div className="self-center">
				<Tag label="Sobre mim" />
			</div>

			<div className="flex w-full flex-col justify-between gap-12 md:flex-row">
				{/* Image */}
				<div className="flex justify-center md:order-first md:justify-end">
					<div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
						<Image
							src=""
							alt=""
							className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
							style={{ objectFit: "cover" }}
						></Image>
						<div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
					</div>
				</div>

				{/* Content */}
				<div className="flex max-w-xl flex-col gap-6">
					<Typography variant="h3">Um pouco sobre mim</Typography>
					<Typography>
						Sou um jovem desenvolvedor de software, apaixonado por
						tecnologia e comprometido com a melhoria contínua.
						Fascina-me entender o funcionamento das tecnologias e
						criar soluções que impactam positivamente a vida das
						pessoas.
					</Typography>
					<Typography>
						Iniciei a minha carreira como desenvolvedor em 2019,
						começando com a linguagem C, e desde então, venho
						crescendo e evoluindo, enfrentando novos desafios e
						dominando as tecnologias mais recentes. Ao longo do
						tempo, desenvolvi diversos projetos, tanto pessoais como
						para terceiros.
					</Typography>
					<Typography>
						Atualmente, estou a cursar Engenharia Informática no
						Instituto Superior Politécnico de Tecnologias e
						Ciências, onde aplico os conhecimentos adquiridos para
						me aperfeiçoar ainda mais na área de tecnologia. Com 3
						anos de experiência em desenvolvimento de software,
						foco-me principalmente no desenvolvimento web,
						utilizando tecnologias como Next.js, TypeScript e
						TailwindCSS.
					</Typography>
					<Typography>
						Estou disponível para trabalhos freelance, por isso, não
						hesite em entrar em contacto!
					</Typography>
				</div>
			</div>
		</Container>
  );
};

export default AboutMeSection;
