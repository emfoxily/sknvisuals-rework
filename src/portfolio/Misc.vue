<template>
    <div>
        <Nav style="margin-top: 30vw"/>
        <MiscImages />
    </div>
</template>

<script>
import Nav from '../nav/Nav.vue'
import MiscImages from '../portfolio/MiscImages.vue'

export default {
    name: 'Misc',
    components: {
        Nav,
        MiscImages
    }
}
</script>
