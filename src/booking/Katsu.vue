<template>
    <div>
        <mq-layout mq="sm">
            <Nav style="margin-top: 30vw" />
            <iframe class="sm-iframe" src="https://docs.google.com/forms/d/e/1FAIpQLSdSq6Foz-rJ-Cg5rtIBINzbUlieSfq_nbbxQt-DnZVBdbOmMA/viewform?embedded=true" width="305" height="600vw" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
        </mq-layout>
    </div>
</template>

<script>
import Nav from '../nav/Nav.vue'

export default {
    name: 'Katsu',
    components: {
        Nav
    }
}
</script>

<style>
    iframe.sm-iframe {
        width: 100%;
    }
</style>
