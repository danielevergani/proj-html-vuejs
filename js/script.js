var app = new Vue({
    el: '#app',
    data: {
      links:["home", "about", "project", "testimonial", "blog", "contact"],
      background:["images/oliver-ragfelt-488196-2.jpg", "images/oliver-ragfelt-488196-unsplash.jpg", "images/12679.jpg"],
      images:["images/image_1.jpg", "images/image_2.jpg", "images/image_3.jpg", "images/image_4.jpeg", "images/image_5.jpg", "images/image_6.jpg"],
      imageToEnd:"",
      indexImage: 0
    },

    methods: {

      nextImg: function(){

        this.imageToEnd = this.images.splice(0,1);
        this.images.push(this.imageToEnd[0]);
      }

    }
  })