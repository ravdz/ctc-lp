import { Container } from "@/components/atoms/Container";

export const MembershipFormSection = () => {
	return (
		<section>
			<div className="bg-blue-400 pb-10 pt-20">
				<Container>
					<div className="flex items-start justify-center">
						<iframe
							src="https://docs.google.com/forms/d/e/1FAIpQLSeox34mUe2B5pSXkDkmoXeKqH_NVkfq0rjvuzbjaigUA1xH0w/viewform?embedded=true"
							width="640"
							height="1532"
							frameBorder="0"
						>
							Loading…
						</iframe>
					</div>
				</Container>
			</div>
		</section>
	);
};
