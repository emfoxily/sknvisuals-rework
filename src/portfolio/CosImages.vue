<template>
    <div>
        <mq-layout mq="sm" class="sm-portfolio">
            <img src="../portfolio/cosplay/groupshot1.png" alt=" group shot" />
        </mq-layout>
    </div>
</template>

<script>
export default {
    name: 'CosImages'
}
</script>

<style scope>
    .sm-portfolio {
        display: flex;
        justify-content: center;
    }
    .sm-portfolio img {
        width: 95%;
        align-self: center;
    }
</style>
