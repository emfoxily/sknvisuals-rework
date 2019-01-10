<template>
    <div>
        <mq-layout mq="sm">
            <Nav style="margin-top: 30vw" />
            <Form class="sm-form" />
        </mq-layout>
        <mq-layout mq="md+">
    
        </mq-layout>
    </div>
</template>

<script>
    import Nav from '../nav/Nav.vue'
    import Form from '../contact/Form.vue'
    
    export default {
        name: 'Contact',
        components: {
            Nav,
            Form
        }
    }
</script>

<style>
    form.sm-form {
        display: flex;
        flex-direction: column;
    }
    
    form.sm-form img {
        width: 100%;
        align-self: center;
    }
    
    form.sm-form input[type="text"],
    form.sm-form input[type="email"] {
        background-color: #c5c5c5;
        padding: 2em 1em;
        width: 85vw;
        height: .5vw;
        border: .15em solid #000;
        border-radius: 3vw;
        outline: none;
        font-size: 5vw;
        margin-bottom: 0em;
    }
    
    form.sm-form input[type="reset"],
    form.sm-form input[type="submit"] {
        background-color: #111;
        color: #c5c5c5;
        font-family: 'bebas';
        font-size: 8vw;
        font-weight: 600;
        border: .08em solid #000;
        outline: none;
        border-radius: 3vw;
        margin-bottom: .2em;
        padding: .5em;
    }
    
    form.sm-form textarea {
        background-color: #c5c5c5;
        padding: 1em;
        width: 85vw;
        height: 50vw;
        margin-bottom: 5vw;
        outline: none;
        border: .15em solid #000;
        border-radius: 3vw;
        font-size: 5vw;
    }
</style>

