<template>
    <table>
        <!-- <tr-component v-for="(rowData, index) in tableData" :key="index" :row-index="index"></tr-component> -->
        <slot/>
    </table>
</template>

<script>
 import TrComponent from './TrComponent';

 export default{
    //  components: {
    //      TrComponent,
    //  },
    //  computed: {
    //      tableDat a(){
    //          return this.$store.state.tableData;
    //      },
    //  },
 };
</script>