import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { TeamMemberTile } from "@/components/molecules/TeamMemberTile";

const teamMembers = [
	{
		id: 1,
		name: "Leopold van Oosten",
		position: "Director",
		linkedin: "https://www.linkedin.com/in/leopold-van-oosten-0000000000/",
		image: {
			src: "/images/team/leopold.jpg",
			alt: "Leopold van Oosten",
		},
	},
	{
		id: 2,
		name: "Paulina Markowska",
		position: "Operations Manager",
		linkedin: "https://www.linkedin.com/in/leopold-van-oosten-0000000000/",
		image: {
			src: "/images/team/paulina.jpg",
			alt: "Paulina Markowska",
		},
	},
	{
		id: 3,
		name: "Gideon van Kleij",
		position: "Board Member",
		linkedin: "https://www.linkedin.com/in/leopold-van-oosten-0000000000/",
		image: {
			src: "/images/team/gideon.jpg",
			alt: "Gideon van Kleij",
		},
	},
];

export const OurTeamSection = () => {
	return (
		<section>
			<Container className="py-12 md:py-16">
				<div>
					<Heading is="h2" className="mb-12">
						Our team
					</Heading>
					<ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
						{teamMembers.map(({ id, name, position, linkedin, image }) => (
							<TeamMemberTile
								key={id}
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
