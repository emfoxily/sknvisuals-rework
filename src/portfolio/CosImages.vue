<template>
    <div>
        <mq-layout mq="sm">
            <Images class="sm-portfolio" />
        </mq-layout>
    
        <mq-layout mq="md+">
            <Images class="lg-portfolio" />
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
    /* .lg-portfolio {
        display: flex;
        flex-wrap: wrap;
        padding: 0 4px;
    } */
    
    /* .lg-portfolio img {
        flex: 25%;
        max-width: 50%;
        align-self: center;
    } */
    
    /* .column {
        flex: 25%;
        max-width: 25%;
        padding: 0 4px;
    }
    
    .column img {
        margin-top: 8px;
        vertical-align: middle;
    } */
    
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
