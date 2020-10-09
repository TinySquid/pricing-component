import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import Helmet from "react-helmet";

export default function SEO({ title, description }) {
	// Get default metadata from gatsby-config
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						siteUrl
					}
				}
			}
		`
	);

	return (
		<Helmet
			htmlAttributes={{
				lang: "en",
			}}
			// Use prop title or fallback to site title
			title={title}
			defaultTitle={site.siteMetadata.title}
			// Use prop desc or fallback to site desc
			meta={[
				{
					name: "description",
					content: description || site.siteMetadata.description,
				},
			]}
		/>
	);
}
