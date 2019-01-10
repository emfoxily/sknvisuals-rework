<template>
    <form action="https://formspree.io/superkingnerd@outlook.com" method="POST">
        <img src="../assets/contact.png" alt="contact" />
        <input type="text" name="name" placeholder="Full Name" />
    
        <input type="email" name="email" placeholder="Email" />
    
        <textarea name="message" placeholder="Looking to book a shoot outside of an event? Please provide the date and location and I'll be sure to get back to you so we can make some magic happen!" />
    
        <input type="reset" value="reset" />
        <input type="submit" value="send" />
    </form>
</template>

<script>
    export default {
        name: 'Form',
    }
</script>
