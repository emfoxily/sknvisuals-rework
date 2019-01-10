<template>
    <div>
        <mq-layout mq="sm">
            <Nav style="margin-top: 30vw" />
            <List class="sm-list"/>
        </mq-layout>
    </div>
</template>

<script>
import Nav from '../nav/Nav.vue'
import List from '../booking/List.vue'

export default {
    name: 'Booking',
    components: {
        Nav,
        List
    }
}
</script>

<style scope>
    ul.sm-list {
        display: flex;
        justify-content: center;
        list-style: none;
    }

    ul.sm-list li {
        margin-left: -2em;
    }

    ul.sm-list a {
        font-family: 'bebas';
        font-size: 15vw;
        color: #c5c5c5;
        text-decoration: none;
    }
</style>
