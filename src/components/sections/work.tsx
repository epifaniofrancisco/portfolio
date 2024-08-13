import { PROJECTS } from "@/lib/projects-data";
import ProjectDetails from "@/components/data-display/project-details";
import Tag from "@/components/data-display/tag";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";

const WorkSection = () => {
	return (
		<Container id="work">
			<div className="flex flex-col items-center gap-4">
				<div className="self-center">
					<Tag label="Trabalhos" />
				</div>
				<Typography variant="subtitle" className="max-w-xl text-center">
					Alguns projetos que já fiz:
				</Typography>
			</div>

			{PROJECTS?.map((project, index) => (
				<ProjectDetails
					key={index}
					{...project}
					layoutType={index % 2 === 0 ? "default" : "reverse"}
				/>
			))}
		</Container>
	);
};

export default WorkSection;
