var smartgrid = require('smart-grid');
 
/* It's principal settings in smart grid project */
var settings = {
    outputStyle: 'scss', /* less || scss || sass || styl */
    columns: 12,
    offset: "30px",
	//mobileFirst: true,
	container: {
        maxWidth: "950px",
        fields: "30px"
    },
	breakPoints: {
		md: {
            width: "765px",
        },
        sm: {
            width: "625px",
            
        },
        xs: {
            width: "530px",
             
        },
        xxs: {
            width: "450px",
            
            offset: "10px",
            fields: "5px"  
        }
	},
};
 
smartgrid('./', settings);