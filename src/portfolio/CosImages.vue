<template>
    <div>
        <mq-layout mq="sm">
            <Images class="sm-portfolio" />
        </mq-layout>
    </div>
</template>

<script>
import Images from '../portfolio/cosplay/Images.vue'

export default {
    name: 'CosImages',
    components: {
        Images
    }
}
</script>

<style scope>
    .sm-portfolio {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .sm-portfolio img {
        width: 95%;
        align-self: center;
        margin-bottom: .5em;
        border: .5em solid #111;
    }
</style>
