export default{
    template: '#search-form',
    props: ['value'],
    data(){
        return{
           inputValue: this.value
        }
    },
    watch: { //watch하다가 view값이 바뀌면 실행
        value(newVal, oldVal){
            this.inputValue = newVal;
        }
    },
    methods: {
        onSubmit(){
            this.$emit('@submit', this.inputValue.trim)

        },
        onKeyup(){
            if(!this.inputValue.length) this.onReset()
        },
        onReset(){
            this.inputValue = ''
            this.$emit('@reset')
        }
    }
}