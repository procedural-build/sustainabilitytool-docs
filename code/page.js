import PropTypes from 'prop-types';
import React from 'react';
import { Header } from "./header"

/**
 * The page layout component
 */
const Page = ({ title, stylesheet, header, main, footer, navigation, script, _relativeURL, _ID }) => (
	<html>
	<head>
		<title>Sustainability Tool Documentation - { title }</title>
		<meta charSet="utf-8" />
		<meta httpEquiv="x-ua-compatible" content="ie=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />

		<link rel="stylesheet" href={ _relativeURL( `/assets/css/site.css`, _ID ) } />
		{
			stylesheet !== undefined
				? ( <link rel="stylesheet" href={ _relativeURL( `/assets/css/${ stylesheet }.css`, _ID ) } /> )
				: null
		}
	</head>
	<body>
		<div className="top">
			{/* < Header /> */}
			<aside className="docs__nav">
				{ navigation }
			</aside>
			<main className="body__divider">
				{ main }
			</main>
		</div>

		<footer>
			{ footer }
		</footer>

		{
			script !== undefined
				? ( <script src={ _relativeURL( `/assets/js/${ script }.js`, _ID ) } /> )
				: null
		}
	</body>
	</html>
);

Page.propTypes = {
/**
	 * title: Homepage
	 */
	title: PropTypes.string.isRequired,

	/**
	 * main: (partials)(5)
	 */
	main: PropTypes.node.isRequired,

	/**
	 * footer: (partials)(2)
	 */
	footer: PropTypes.node.isRequired,
};

Page.defaultProps = {};

export default Page;
