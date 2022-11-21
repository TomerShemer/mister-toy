<!-- <template>
    <CMultiSelect :options="options" selectionType="tags" />
</template>
<script>
import '@coreui/coreui/dist/css/coreui.min.css'
import { CAlert } from '@coreui/vue'

export default {
    data: () => {
        return {
            options: [
                {
                    value: 0,
                    text: 'Angular',
                    selected: true
                },
                {
                    value: 1,
                    text: 'Bootstrap',
                    selected: true,
                    disabled: true,
                },
                {
                    value: 2,
                    text: 'React.js',
                },
                {
                    value: 3,
                    text: 'Vue.js',
                },
                {
                    label: 'backend',
                    options: [
                        {
                            value: 4,
                            text: 'Django',
                        },
                        {
                            value: 5,
                            text: 'Laravel',
                            selected: true,
                        },
                        {
                            value: 6,
                            text: 'Node.js',
                        },
                    ],
                },
            ],
        }
    },
}
</script> -->

<!-- ////////////////////////////////// -->

<!-- <template>
    <div>
        <multiselect v-model="selected" :options="options">
        </multiselect>
    </div>
</template>
     
<script>
import Multiselect from 'vue-multiselect'
export default {
    components: { Multiselect },
    data() {
        return {
            selected: null,
            options: ['list', 'of', 'options']
        }
    }
}
</script>
     
<style src="vue-multiselect/dist/vue-multiselect.min.css">

</style> -->