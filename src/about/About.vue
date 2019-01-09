<template>
    <div>
        <mq-layout mq="sm">
            <Nav style="margin-top: 55vw"/>
            <div class="geoff">
                <img src="../assets/geoff.png" alt="Picture of Geoff" />
            </div>
            <p class="about">
                <img src="../assets/aboutgeoff.png" alt="About Geoff" />
                <br class="break" /> Hey there, my name is Geoff Miller! I'm a self-proclaimed up and coming portrait, event, and cosplay photographer based in Cleveland, OH. I've been a cosplayer, personally, since 2008 and took up photography in 2009. I've
                always loved cosplay and I've always loved photography, so mixing the two was an obvious choice for me, especially when I realized that I could help people display and show off their hard work on their costumes. Photography for me has always
                been a way to show off your happiest time, or something that means a lot to you- and capturing that feeling forever is what I want to help other people accomplish. I currently shoot with my Canon EOS T6S, and my lenses switch between a few
                different options depending on the style of the shoot.
                <br/>
                <br/> My goal is to make people who book with me, feel happy, to feel like they're going to love the final product- and then be blown away when they get their photos back and are given something ten times better than what they had expected
                originally. When I'm in a shoot, I'm dedicated to making sure the cosplayer, or model, is going to enjoy themselves. Awkward shoots are never my goal and I make sure to give you a unque experience of laughter and silliness incorporated with
                making sure you look your best at the same time.
                <br/>
                <br/> Additionally, as a fun fact, I have three cats, and they're basically my children. Talk to me any time about cats. Please.
            </p>
        </mq-layout>
    </div>
</template>

<script>
import Nav from '../nav/Nav.vue'

export default {
    name: 'About',
    components: {
        Nav
    }
}
</script>

<style scope>
    div.geoff {
        margin-top: -25vw;
    }

    div.geoff img {
        width: 100%;
        margin-top: -20vw;
    }

    p.about {
        position: absolute;
        width: 75vw;
        margin: -9vw 2vw 10vw 4vw;
        font-size: 7vw;
        color: #c5c5c5;
        text-align: justify;
        padding: 1em;
        z-index: -1;
    }

    p.about img {
        width: 100%;
    }
</style>

