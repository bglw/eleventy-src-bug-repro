module.exports = function (eleventyConfig) {

	eleventyConfig.addLiquidTag("ross_co", (_) => {
		return {
			parse: function (_, _) {},
			render: async function (_, _) {
				return `Ross Co!`;
			}
		};
	});

	eleventyConfig.cloudcannonOptions = {
		dir: {
			pages: 'pages'
		}
	};

};
