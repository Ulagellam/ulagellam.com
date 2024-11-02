import Giscus from "@giscus/react";
import { useColorMode } from "@docusaurus/theme-common";

export default function GiscusComponent() {
	const { colorMode } = useColorMode();

	return (
		<Giscus
			repo="Ulagellam/ulagellam.com"
			repoId="R_kgDOH6WKAQ"
			category="Ulagellam Blog Comments"
			categoryId="DIC_kwDOH6WKAc4CW89-"
			mapping="title"
			term="Comments"
			strict="0"
			reactionsEnabled="1"
			emitMetadata="1"
			inputPosition="top"
			theme={colorMode}
			lang="en"
			loading="lazy"
			crossorigin="anonymous"
			async
		/>
	);
}
