import { Container } from "@/components/atoms/Container";

export const ContactUsFormSection = () => {
	return (
		<section>
			<div className="bg-blue-400 pb-10 pt-20">
				<Container>
					<div className="flex items-start justify-center">
						<iframe
							src="https://docs.google.com/forms/d/e/1FAIpQLSdyitA_4jqiyOsTx4hW44ZYIBNKsW89x5EZPHfSZ7LeVsomRw/viewform?embedded=true"
							width="640"
							height="1776"
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
