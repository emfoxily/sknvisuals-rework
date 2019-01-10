<template>
    <ul>
            <li>
                <router-link to="/">
                    HOME
                </router-link>
            </li>
            <li>
                <router-link to="/about">
                    ABOUT
                </router-link>
            </li>
            <li>
                <router-link to="/portfolio">
                    PORTFOLIO
                </router-link>
            </li>
            <li>
                <router-link to="/events">
                    EVENTS
                </router-link>
            </li>
            <li>
                <router-link to="/booking">
                    BOOK ME
                </router-link>
            </li>
            <li>
                <router-link to="/contact">
                    CONTACT
                </router-link>
            </li>
        </ul>
</template>

<script>
export default {
    name: 'Links'
}
</script>
