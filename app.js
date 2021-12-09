
var store = new Vue ({
    el: "#app",
    data:{
        cart: 0,
        availability: "",
        popupstorage: {},
        popup: false,
        adding: false,
        SName: "",
        SType: "",
        SBrand: "",
        SPrice: "",
        instruments: [
            {
                id: 0,
                name: "Stratocaster",
                type: "guitar",
                brand: "Fender",
                price: "$120.00",
                img: "https://media.wired.com/photos/5f91c94ddaa25f804cdbd1ac/master/w_1600,c_limit/Gear-Fender-American-Prof-II-Strat-SOURCE-Fender.jpg",
                hidden: false,
                details: false
            },
            {
                id: 1,
                name: "Eva Guitar",
                type: "guitar",
                brand: "Fender",
                price: "$240.00",
                img: "https://images.reverb.com/image/upload/s--0WyJ5NpM--/f_auto,t_large/v1591715767/dsvb5lssxf37dvlz2q8a.jpg",
                hidden: false,
                details: false
            },
            {
                id: 2,
                name: "N3X",
                type: "Piano",
                brand: "Yamaha",
                price: "$339.99",
                img: "https://www.yamaha.com/us/pianos/images/N3X-lineup.jpeg",
                hidden: false,
                details: false
            },
            {
                id: 3,
                name: "Electric Violin",
                type: "Violin",
                brand: "Yamaha",
                price: "199.99",
                img: "https://m.media-amazon.com/images/I/41zC6bTXTBL._AC_SX425_.jpg",
                hidden: false,
                details: false
            },
            {
                id: 4,
                name: "Midwood Guitar",
                type: "guitar",
                brand: "Maton",
                price: "$129.99",
                img: "https://cdn11.bigcommerce.com/s-e3wpevzfi1/images/stencil/640w/uploaded_images/dsc01352.jpg?t=1548275418",
                hidden: false,
                details: false
            },
            {
                id: 5,
                name: "Sunburst",
                type: "guitar",
                brand: "Maton",
                price: "220.99",
                img: "https://cdn.webshopapp.com/shops/179375/files/375730721/image.jpg",
                hidden: false,
                details: false
            }
        ]
    },
    methods:{
        addNew: function(){
        },
        addCart: function(idx){
            this.cart += 1;
            this.instruments[idx].hidden = true;
            if(this.cart === this.instruments.length){
                this.availability = "The store is empty go home"
            }else if(this.popup){
                this.popup = false
                for(var i=0;i<this.instruments.length; i++){
                    if(this.instruments[i].id === idx){
                        this.instruments[i].hidden = true;
                        this.instruments[i].details = false;
                    }else{
                        this.instruments[i].hidden = false;
                        this.instruments[i].details = false;
                    }
                }
            }
        },
        emptyCart: function(){
            for(var i=0;i<this.instruments.length; i++){
                if(this.instruments[i].hidden === true){
                    this.instruments[i].hidden = false;
                }
            }
            this.cart = 0
            this.availability = ""
        },
        popUp: function(idx){
            if(this.popup === false){
                this.popup = true;
                for(var i=0; i<this.instruments.length; i++){
                    if(this.instruments[i].id === idx){
                        this.instruments[i].hidden = false;
                        this.instruments[i].details = true;
                    }else{
                        this.instruments[i].hidden = true
                    }
                }
            }else{
                this.popup = false
                for(var i=0;i<this.instruments.length; i++){
                    this.instruments[i].hidden = false;
                    this.instruments[i].details = false;
                }
            }
        },
        addNew: function(){
            this.adding = true;
            for(var i=0; i<this.instruments.length; i++){
                this.instruments[i].hidden = true;
            }
        },
        submit: function(){
            this.instruments.push({id: this.instruments.length,
                name: this.SName,
                type: this.SType,
                price: this.SPrice,
                brand: this.SBrand,
                img: "",
                hidden: false, details: false});
            this.adding = false;
            for(var i=0; i<this.instruments.length; i++){
                this.instruments[i].hidden = false;
            }
        },
        cancel: function(){
            this.adding = false;
            for(var i=0; i<this.instruments.length; i++){
                this.instruments[i].hidden = false;
            }
        }
    }
})