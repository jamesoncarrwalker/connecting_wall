

<template>
    <div class="input-group">
        <input type="text" class="form-control" v-model="inputValue">
        <span class="input-group-addon btn btn-success"
                @click="submitClicked()">Submit</span>
    </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {

        components: {

        },
        data() {
            return {
                inputValue:''
            }
        },

        props: {
            onClickFunc : {
                type: String,
                required: true
            },

            onClickData : {
                type: Object,
                default: {}
            }
        },

        methods: {
            submitClicked() {
                const value = {value: this.inputValue};
                const payload = {...this.onClickData, ...value};
                this.$store.dispatch(this.onClickFunc,payload);
            },

        },
        computed: {

        }

    };
</script>