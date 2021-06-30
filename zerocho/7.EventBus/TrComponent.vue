<template>
    <tr>
        <td-component v-for="(cellData, index) in rowData" :key="index" :cell-data="cellData" :cell-index="index" :row-index="rowIndex"></td-component>
    </tr>
</template>

<script>
 import TdComponent from './TdComponent.vue';

 export default{
     components: {
         TdComponent,
     },
     data(){
         return{
             parent: 'im yo father',
         };
     },
     props: {
         rowData: Array,
         rowIndex: Number,
     },
 }
</script>