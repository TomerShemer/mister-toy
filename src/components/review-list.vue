<template>
    <section class="review-list">
        <ul class="review-list-ul">
            <review-preview v-for="review in reviews" :review="review" :key="review._id" />
        </ul>
    </section>
</template>

<script>
import reviewPreview from './review-preview.vue';
export default {
    props: {
        reviews: {
            type: Array
        }
    },
    components: {
        reviewPreview
    },
}
</script>

<style lang="scss" scoped>

</style>