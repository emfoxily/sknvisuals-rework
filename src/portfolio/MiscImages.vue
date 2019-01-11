<template>
    <div>
        <mq-layout mq="sm">
            <Images class="sm-portfolio" />
        </mq-layout>
        <mq-layout mq="md+">
            <Images />
        </mq-layout>
    </div>
</template>

<script>
import Images from '../portfolio/misc/Images.vue'

export default {
    name: 'MiscImages',
    components: {
        Images
    }
}
</script>

