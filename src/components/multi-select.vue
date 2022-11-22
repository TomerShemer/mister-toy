<template>
    <section v-if="labels" class="multi-select">
        <el-select @change="updateLabels" v-model="labels" multiple collapse-tags placeholder="Select"
            style="width: 240px">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
    </section>
</template>

<script>
import { ref } from 'vue'
export default {
    data() {
        return {
            labels: null,

            options: this.$store.getters.getLabelsSelect
        }
    },
    props: {
        toyToEdit: {
            type: Object,
            required: true
        }
    },
    mounted() {
        this.labels = ref([...this.toyToEdit.labels])
    },
    methods: {
        updateLabels() {
            // console.log(this.labels);
            this.$emit('updateLabel', this.labels)
        }
    }
}
</script>
