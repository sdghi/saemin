/* eslint-disable prettier/prettier */
module.exports = {
	css: {
		loaderOptions: {
			sass: {
				prependData: `
                    @import "~@/scss/variables.scss";
                    @import "~@/scss/typography.scss";
                `
			}
		}
	}
};
