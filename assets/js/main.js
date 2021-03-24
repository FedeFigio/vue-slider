var app = new Vue({
    el: "#root",
    data: {
        index: 0,
        arrImg: [
            "https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_US/turner-gumball_S12-Full-Image_GalleryBackground-en-US-1600876463354._SX1080_.jpg",
            "https://static3.cbrimages.com/wordpress/wp-content/uploads/2021/02/Amazing-World-of-Gumball-Header.jpg",
            "https://ca-times.brightspotcdn.com/dims4/default/54248de/2147483647/strip/true/crop/1600x900+0+1/resize/1200x675!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F66%2F62%2Fbab775feb3eaf67d851a3278ae63%2Fla-et-hc-exclusive-amazing-world-of-gumball-or-001",
            "https://ichef.bbci.co.uk/news/1024/cpsprodpb/7F65/production/_100431623_gumball_choices_preview.jpg"
        ]

    },
    methods: {
        next: function() {
            if (this.index < this.arrImg.length - 1) {
                this.index++
            } else {
                this.index = 0
            }
        },
        prev: function() {
            if (this.index == 0) {
                this.index = this.arrImg.length - 1
            } else {
                this.index--
            }
        },
        selectDot: function(index) {
            this.index = index
        }

    }
})