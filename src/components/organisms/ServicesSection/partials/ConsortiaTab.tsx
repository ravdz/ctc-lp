import { ServiceVariant } from "./ServiceVariant";

export const ConsortiaTab = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2">
			<div className="rounded-lg bg-green-600">
				<ServiceVariant
					title="Consortia creation"
					description="Are you a founder or investor looking to hire talent in climate tech sector? Book a free call so we can discuss the talent matchmaking possibilities for you: "
					items={[
						"Book a call with us, free of charge",
						"Let us know your needs",
						"Get matched with our curated database of top climate tech talents",
					]}
					link={{ label: "Read more", url: "/" }}
					badge="success fee"
				/>
			</div>
		</div>
	);
};
