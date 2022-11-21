<template>
    <li v-if="review" class="review-preview">
        <custom-preview>
            <template #header>
                <h3>By: {{ review.username }}</h3>
                <p>{{ review.txt }}</p>
                <p>Rate: {{ review.rate }}</p>
            </template>
            <template #footer>

            </template>
        </custom-preview>
    </li>
</template>

<script>
import customPreview from './custom-preview.vue';
export default {
    props: {
        review: {
            type: Object
        }
    },
    components: {
        customPreview
    }
}
</script>

<style lang="scss" scoped>

</style>