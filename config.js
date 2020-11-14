const config = {
    name: "My Sandbox Site!",
    motto: "Your average sandbox site!",
    logo: "",
    favicon: "",
    social_media:{
        twitter:"",
        discord:"",
        guilded:"",
        youtube:"",
    },
    forums:{
        postRate: 1, // one post every 15 seconds

        categories:{
            
            {
                name: "General",
                desc: "Just a general place"
            },
        
            {
                name: "Off-Topic",
                desc: "Just random."
            },
    
            {
                name: "Marketplace",
                desc: "Trading?! How?!"
            }
        }

    },
    avatar:{
        type: "roundy"
    },

    currency: {
        currency: "Vloxys",
        currencyIcon: "link",
        starterCurrency: 10, // Starter Currency

    },
    memberShip:{
        memberShipExtraCurrency: 100, // Money per day for plus
        noMembershipExtraCurrency: 20, // Money per day for no plus
        membershipName: "Plus", // Membership name

    },
    bootsrapTheme: "flatly", // https://bootswatch.com/

    site_icon: ""


}
module.exports = config;
