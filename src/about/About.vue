<template>
    <div>
        <mq-layout mq="sm">
            <Nav style="margin-top: 55vw" />
            <div class="sm-geoff">
                <img src="../assets/geoff.png" alt="Picture of Geoff" />
                <br />
                <br />
                <br />
                <br />
                <br />
                <img src="../assets/aboutgeoff.png" alt="About Geoff" />
            </div>
            <br class="break" />
            <AboutText class="sm-about" />
        </mq-layout>
        <mq-layout mq="md+">
            <Nav />
            <!-- <img class="lg-about-head" src="../assets/aboutgeoff.png" alt="About Geoff" /> -->
            <img class="lg-geoff" src="../assets/geoff.png" alt="Picture of Geoff" />
            <div class="lg-about-wrapper">
                <img class="lg-about-head" src="../assets/aboutgeoff.png" alt="About Geoff" />
                <AboutText class="lg-about" />
            </div>
        </mq-layout>
    </div>
</template>

<script>
    import Nav from '../nav/Nav.vue'
    import AboutText from '../about/AboutText.vue'
    
    export default {
        name: 'About',
        components: {
            Nav,
            AboutText
        }
    }
</script>

<style scope>
    img.lg-geoff {
        position: fixed;
        width: 30%;
        left: 15vw;
        bottom: 0;
    }

    div.lg-about-wrapper {
        display: flex;
        /* justify-content: center; */
        flex-direction: column;
        margin: 15vw;
        width: 90%;
        z-index: -1;
    }

    div.lg-about-wrapper img {
        /* position: absolute; */
        width: 25vw;
        align-self: center;
    }

    img.lg-about-head {
        width: 25vw;
    }

    p.lg-about {
        background-color: #111;
        font-size: 1.5vw;
        color: #c5c5c5;
        width: 25%;
        height: 25vw;
        overflow: auto;
        padding: 1em;
        border: .3em solid #000;
        border-radius: 1vw;
        margin: 0 31.2vw;
        line-height: 2.5vw;
    }

    div.sm-geoff {
        margin-top: -25vw;
    }
    
    div.sm-geoff img {
        width: 100%;
        margin-top: -25vw;
    }
    
    p.sm-about {
        position: absolute;
        width: 75vw;
        margin: -9vw 2vw 10vw 4vw;
        font-size: 7vw;
        color: #c5c5c5;
        text-align: justify;
        padding: 1em;
        z-index: -1;
    }
    
    p.sm-about img {
        width: 100%;
    }
</style>

