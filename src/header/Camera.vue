<template>
    <div>
        <mq-layout mq="sm" class="mobile-camera">
            <div class="mobile-slideshow" :style="{ backgroundImage: 'url(' + images[currentNumber % images.length] + ')' }" />

            <img src="../assets/cameralens.png" alt="camera lens" />
        </mq-layout>
        <mq-layout mq="md+" class="desk-camera">
            <div class="desk-slideshow" :style="{ backgroundImage: 'url(' + images[currentNumber % images.length] + ')' }" />

            <img style="width: 25vw" src="../assets/cameralens.png" alt="camera lens" />
        </mq-layout>
    </div>
</template>

<script>
    export default {
        name: 'Camera',
        data() {
            return {
                images: [
                    'https://i.imgur.com/fuM285v.jpg', // group shot
                    'https://i.imgur.com/SJKnmyd.jpg', // toga
                    'https://i.imgur.com/zTpxTjU.jpg', // ochaco,
                    'https://i.imgur.com/W17bbst.jpg' // camie
                ],
                currentNumber: 0,
                timer: null,
            }
        },
        mounted() {
            this.startRotation()
        },
        methods: {
            startRotation: function() {
                this.timer = setInterval(this.next, 3000)
            },
            next: function() {
                this.currentNumber += 1
            }
        }
    }
</script>

<style scope>

    .desk-slideshow {
        display: block;
        position: absolute;
        background-size: cover;
        background-position: center;
        margin: 4vw 4.5vw;
        width: 16vw;
        height: 16vw;
        border-radius: 100%;
    }

    .mobile-camera {
        animation: ;
    }

    .mobile-slideshow {
        display: block;
        position: absolute;
        background-size: cover;
        background-position: center;
        margin: 16vw 17.5vw;
        width: 60vw;
        height: 60vw;
        border-radius: 100%;
    }
</style>
