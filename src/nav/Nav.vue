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
        <mq-layout mq="md+">
            <nav class="desk-nav">
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
    
    nav ul {
        list-style: none;
    }
    
    
    /* desktop nav styling */
    
    nav.desk-nav {
        position: fixed;
        width: 100%;
        background-color: #111;
        left: 0;
        top: 0;
        font-size: 1.5vw;
        z-index: 2;
        border-bottom: .3em solid #000;
    }
    
    nav.desk-nav ul {
        display: flex;
        justify-content: center;
    }
    
    nav.desk-nav ul li {
        padding: .1em;
        margin-right: 7vw;
    }
    
    nav.desk-nav ul li:hover {
        text-decoration: underline;
        background: linear-gradient(to left, rgba(117, 190, 214), rgba(148, 211, 172), rgba(252, 231, 148), rgba(234, 154, 107), rgba(214, 98, 98));
        background-clip: text;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    
    
    /* mobile nav styling */
    
    nav.mobile-nav {
        position: fixed;
        background-color: #111;
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
        /* border-bottom: .1em solid #000; */
        margin: 0 0 10vw -10vw;
    }
    
    nav.mobile-nav li:last-child {
        border: none;
    }
    
    span.nav-bars {
        position: fixed;
        display: block;
        background-color: #111;
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
