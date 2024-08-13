import { EXPERIENCES } from '@/lib/data';
import ExperienceDetails from '@/components/data-display/experience-details';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const ExperienceSection = () => {
  return (
    <Container className="bg-gray-50" id="experience">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Experiencia" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          Um pequeno resumo das minhas experiências profissionais
        </Typography>
      </div>

      {EXPERIENCES?.map((experience, index) => (
        <ExperienceDetails {...experience} key={index} />
      ))}
    </Container>
  );
};

export default ExperienceSection;
