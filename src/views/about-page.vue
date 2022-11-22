<template>
    <section class="about-page">
        <h1>About us</h1>
        <google-map />
    </section>
</template>

<script>
import googleMap from '../components/google-map.vue';
export default {
    components: {
        googleMap
    }
}
</script>