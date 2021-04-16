<template>
    <div>
        <div class="w-1/2 mx-auto">
            <el-carousel :interval="5000" arrow="always">
                <el-carousel-item v-for="item in 4" :key="item">
                    <h3>{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="w-full mt-8 xl:flex justify-between">
            <el-card class="xl:w-1/4 sm:w-full mt-4" v-for="(item, index) in cardDataList" :key="index">
                <div slot="header" class="clearfix">
                    <span>{{ item.name }}</span>
                </div>
                <div v-for="(contentItem, contentIndex) in item.listContent" :key="contentIndex" class="text item">
                    {{ contentItem }}
                </div>
            </el-card>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            cardDataList: [
                { name: '成绩', listContent: ['a'] },
                { name: '成绩', listContent: ['a'] },
                { name: '成绩', listContent: ['a'] },
            ],
        };
    },
};
</script>
<style>
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: '';
}
.clearfix:after {
    clear: both;
}
</style>
