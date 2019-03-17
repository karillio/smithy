<template>
    <b-row class="text-center mx-auto">
        <b-col>
            <v-gallery class="mx-auto" :images="list" type="carousel" ></v-gallery>
        </b-col>
    </b-row>
</template>


<script>

import ImageWall from "./ImageWall";
// import VGallery from "v-gallery";

export default {
    components: {
        ImageWall,
        // VGallery
    },
    data(){
        return {
            list: [
                {title:'Ворота',url:'/imgs/maingallery/g1.jpg'},
                {title:'Новобудова',url:'/imgs/maingallery/g2.jpg'},
                {title:'Спарта!',url:'/imgs/maingallery/g3.jpg'},
                {title:'Ворота',url:'/imgs/maingallery/g4.jpg'},
                {title:'Перила',url:'/imgs/maingallery/g5.jpg'},
                {title:'Сходи',url:'/imgs/maingallery/g6.jpg'},
            ]
        }
    }
}
</script>

<style lang="scss">
    .image-wall-element {
        /* margin-left: -100px; */
    }

    // .v-gallery .light-carousel {
    //     background-color: transparent !important;
    // }

    .v-gallery {
        #blueimp-gallery {
            background: transparent !important;

            img {
                opacity: 0.6;
                box-shadow: 0 0 8px 8px white inset;
            }
        }
    }


</style>

