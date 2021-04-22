<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,i) in fotos" :key="i">
                <img :src="url+item" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <h3>Homepage-Container</h3>
    </div>
</template>

<script>
export default {
    data(){
        return {
            fotos:[],
            url:'http://127.0.0.1:8081/src/images/'
        }
    },
    created(){
        this.getFoto();
    },
    methods:{
        async getFoto(){
            const {data} = await this.$http.get("/src/images/");
            // console.log(data);
            if(data) this.fotos = data          
        }
    },
}
</script>

<style lang="scss" scoped>
    .mint-swipe{
        height: 180px;

        .mint-swipe-item{
            img{
                width: 100%;
                height: 100%;
            }
        }
        // .mint-swipe-item{
        //     &:nth-child(1){
        //         background-color: red;
        //     }
        //     &:nth-child(2){
        //         background-color: yellowgreen;
        //     }
        //     &:nth-child(3){
        //         background-color: blueviolet;
        //     }
        // }
    }
</style>>
    
