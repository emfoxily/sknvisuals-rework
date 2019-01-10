<template>
    <div>
        <Nav style="margin-top: 30vw"/>
        <CosImages />
    </div>
</template>

<script>
import Nav from '../nav/Nav.vue'
import CosImages from '../portfolio/CosImages.vue'

export default {
    name: 'Cosplay',
    components: {
        Nav,
        CosImages
    }
}
</script>
