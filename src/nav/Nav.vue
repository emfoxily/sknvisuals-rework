<template>
    <div>
        <mq-layout mq="sm">
            <span @click="toggle" class="nav-bars">
                    <img src="../assets/navbars.png" alt="nav" />
                </span>
            <nav class="mobile-nav" v-show="navOpen">
                <Links />
            </nav>
        </mq-layout>
    </div>
</template>

<script>
    import Links from '../nav/Links.vue'
    
    export default {
        name: 'Nav',
        components: {
            Links
        },
        data() {
            return {
                navOpen: false
            }
        },
        methods: {
            toggle() {
                this.navOpen = !this.navOpen
            }
        }
    }
</script>

<style scope>
    nav {
        font-family: 'bebas';
        color: #c5c5c5;
    }
    nav a {
        text-decoration: none;
        color: #c5c5c5;
    }

    nav.mobile-nav {
        position: fixed;
        background-color: #222;
        width: 100%;
        margin: -15vw -5vw -5vw;
        padding: .5em;
        border-bottom: .2em solid #111;
        z-index: 5;
    }
    
    nav.mobile-nav ul {
        list-style: none;
        float: none;
        font-size: 8vw;
        text-align: center;
        margin: 15vw 0 15vw 0;
        z-index: 2;
    }
    
    nav.mobile-nav li {
        border-bottom: .1em solid #222;
        margin: 0 0 10vw -10vw;
    }
    
    nav.mobile-nav li:last-child {
        border: none;
    }

    span.nav-bars {
        position: fixed;
        display: block;
        background-color: #222;
        width: 100%;      
        top: 0;
        left: 0;
        border-bottom: .2em solid #111;
        z-index: 0;
    }

    span.nav-bars img {
        width: 10%;
        padding: 1em 0 .7em 1em;
        cursor: pointer;
    }

</style>
