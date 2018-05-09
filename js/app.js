// datepicker component wrapper
Vue.component('dt-picker',{
    props: ['value', 'placeholder'],
    // template: '#dt-template',
    template: '<input type="text" class="form-control" :value="value">',
    watch: {
        value: function (value) {
          // update value
          $(this.$el)
            .val(value)
        }
    },
    mounted: function () {
    var vm = this
    $(this.$el)
      // init datepicker
      .datepicker({
        format: "yyyy-mm-dd",
		autoclose: true,
		minViewMode: "months"
        }).on('changeDate', function(chosen_date){
                console.log(chosen_date.date)
		        vm.$emit('input', chosen_date.format('yyyy-mm-dd'));
                console.log(chosen_date.format('yyyy-mm-dd'));
		});
    }
})

var today  = new Date();

var parent = new Vue({
    el:"#vue-app",
    delimiters: ['${', '}'],
    data:{
       name:'Month picker',
       check_in: today.getFullYear()+'-02-02',
       errors: {}
    }
});