<template>
<div v-if="data.length">
        <ul class="list">
            <li v-for="(item, index) in data"
                v-on:click="onClickList(item.keyword)"> 
                <!--list 각 아이템을 클릭하면 onClickKeyword 호출 -->
                <span v-if="keywordType" class="number">{{index + 1}}</span>
                {{item.keyword}}
                <span v-if="historyType" class="date">{{item.date}}</span>
                <button v-if="historyType" class="btn-remove"
                  v-on:click.stop="onRemoveList(item.keyword)"></button>
            </li>
        </ul>
    </div>
    <div v-else>
        <span v-if="keywordType">추천 검색어 없음</span>
        <span v-if="historyType">최근 검색어 없음</span>
    </div>
</template>

<script>
export default{
    props: ['data', 'type'],
    computed: {
        keywordType(){
            return this.type === 'keywords'
        },
        historyType(){
            return this.type === 'history'
        },

    },
    methods: {
        onClickList(keyword){
            this.$emit('@click', keyword)
        },
        onRemoveList(keyword){
            this.$emit('@remove', keyword)
        }
    }
}
</script>