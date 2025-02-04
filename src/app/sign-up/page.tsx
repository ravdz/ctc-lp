import { Container } from "@/components/atoms/Container";
import { SubpageHero } from "@/components/organisms/SubpageHero";

const SignUp = () => {
	return (
		<div>
			<SubpageHero title="Sign up" />
			<section>
				<Container>
					<div className="flex items-start justify-center">
						<iframe
							src="https://docs.google.com/forms/d/e/1FAIpQLSdFZijRjDUulFbquGoWgwjk8OM2j9LYDOr3p8hDdLLDRe0Ysg/viewform?embedded=true"
							width="640"
							height="1080"
							frameBorder={0}
							marginHeight={0}
							marginWidth={0}
						>
							Loading…
						</iframe>
					</div>
				</Container>
			</section>
		</div>
	);
};

export default SignUp;
