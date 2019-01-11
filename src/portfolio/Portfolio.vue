<template>
    <div>
        <mq-layout mq="sm">
            <Nav style="margin-top: 30vw" />
            <h1 class="sm-h1">
                <a href="/portfolio/cosplay">COSPLAY</a>
            </h1>
    
            <h1 class="sm-h1">
                <a href="/portfolio/misc">MISCELLANEOUS</a>
            </h1>
        </mq-layout>
        <mq-layout mq="md+">
            <Nav />
            <h1 class="lg-h1" style="margin-top: 20vw;">
                <a href="/portfolio/cosplay">COSPLAY</a>
            </h1>
            <br />
            <hr />
            <h1 class="lg-h1">
                <a href="/portfolio/misc">MISCELLANEOUS</a>
            </h1>
        </mq-layout>
    </div>
</template>

<script>
    import Nav from '../nav/Nav.vue'
    
    export default {
        name: 'Portfolio',
        components: {
            Nav
        }
    }
</script>

<style scope>
    h1.lg-h1 {
        margin-top: 3.5vw;
    }
    
    h1.lg-h1 a {
        display: flex;
        margin: 0vw 0;
        justify-content: center;
        font-family: 'bebas';
        font-size: 5vw;
        text-decoration: none;
        color: #c5c5c5;
    }
    
    h1.lg-h1 a:hover {
        text-decoration: underline;
        background-image: linear-gradient(to left, rgba(117, 190, 214), rgba(148, 211, 172), rgba(252, 231, 148), rgba(234, 154, 107), rgba(214, 98, 98));
        background-clip: text;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    
    h1.sm-h1 {
        padding: .5em;
    }
    
    h1.sm-h1 a {
        display: flex;
        font-family: 'bebas';
        font-size: 15vw;
        color: #c5c5c5;
        justify-content: center;
        text-decoration: none;
    }
</style>

