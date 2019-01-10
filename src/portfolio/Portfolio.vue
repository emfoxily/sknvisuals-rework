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

