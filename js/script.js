var app = new Vue({
    el: '#app',
    data: {
      links:["home", "about", "project", "testimonial", "blog", "contact"],
      testimonials:[
        {
          img: "images/oliver-ragfelt-488196-2.jpg",
          dichiarazione: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi assumenda veniam aperiam aliquam, eum inventore officia est ad laborum? Sapiente ipsam exercitationem velit necessitatibus illo consequuntur consequatur, quo fugiat explicabo.",
          nome: "Vera Duncan",
          azienda: "Amazon Inc."
        },
        {
          img: "images/oliver-ragfelt-488196-unsplash.jpg",
          dichiarazione: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi assumenda veniam aperiam aliquam, eum inventore officia est ad laborum? Sapiente ipsam exercitationem velit necessitatibus illo consequuntur consequatur, quo fugiat explicabo.",
          nome: "Vera Duncan",
          azienda: "Amazon Inc."
        },
        {
          img: "images/12679.jpg",
          dichiarazione: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi assumenda veniam aperiam aliquam, eum inventore officia est ad laborum? Sapiente ipsam exercitationem velit necessitatibus illo consequuntur consequatur, quo fugiat explicabo.",
          nome: "Vera Duncan",
          azienda: "Amazon Inc."
        }
      ],

      images:["images/image_1.jpg", "images/image_2.jpg", "images/image_3.jpg", "images/image_4.jpeg", "images/image_5.jpg", "images/image_6.jpg"],
      imageToEnd:"",
      imageToTop:"",
      lastImgIndex: ""
    },

    methods: {

      nextImg: function(){

        this.imageToEnd = this.images.splice(0,1);
        this.images.push(this.imageToEnd[0]);
      },

      prevImg: function() {
        this.lastImgIndex = (this.images.length - 1);
        this.imageToTop = this.images.splice(this.lastImgIndex,1);
        this.images = [...this.imageToTop, ...this.images];
      }

    }
  })