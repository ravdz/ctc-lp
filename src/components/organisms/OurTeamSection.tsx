import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { TeamMemberTile } from "@/components/molecules/TeamMemberTile";
import aboutUs from "@/data/about-us.json";

export const OurTeamSection = () => {
	return (
		<section id="team">
			<Container className="py-12 md:py-16">
				<div>
					<Heading is="h2" className="mb-12">
						Our team
					</Heading>
					<ul className="flex flex-col flex-wrap items-center justify-start gap-5 md:flex-row md:items-center md:justify-around">
						{aboutUs.team.members.map(({ name, position, linkedin, image }, index) => (
							<TeamMemberTile
								key={index}
								name={name}
								position={position}
								linkedin={linkedin}
								image={image}
							/>
						))}
					</ul>
				</div>
			</Container>
		</section>
	);
};
