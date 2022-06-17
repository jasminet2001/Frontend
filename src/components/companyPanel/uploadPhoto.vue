<template>
    <v-row>
        <div class="imagePreviewWrapper"
        :style="{'background-image':`url(${previewImage})`}" @click="selectImage"
        ></div>
        <input ref="fileInput" type="file" @input="pickFile">
    </v-row>
</template>

<script>
export default {
    data(){
        return{
            previewImage: null,
        };
    },
    methods:{
        selectImage(){
            this.$refs.fileInput.click()
        },
        pickFile(){
            let input = this.$refs.fileInput
            let file = input.files
            if(file && file[0]){
                let reader = new FileReader
                reader.onload = e =>{
                    this.previewImage = e.target.result
                }
                reader.readAsDataURL(file[0])
                this.$emit('input', file[0])
            }
        },
    },
}
</script>

<style>
    .imagePreviewwrapper{
        width:150px;
        height:150px;
        display:block;
        cursor:pointer;
        margin:0auto 30px;
        background-size:cover;
        background-position:center center;
    }
</style>