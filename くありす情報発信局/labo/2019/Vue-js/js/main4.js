(function() {
    //エラーチェック用
    'use strict'

    
    // two way data binding (to UI)

    var likeComponent = Vue.extend({
        // props: ['message'],
        props: {
            message: {
                type: String,
                default: 'Like'
            }
        },
        data: function() {
            return {
              count: 0
            }
        },
        template: '<button @click="countUp">{{ message }} {{ count }}</button>',
        // template: '<button>Like</button><button>Like</button>'
        // template: '<div><button>Like</button><button>Like</button></div>'
        methods: {
            countUp: function() {
              this.count++;
              this.$emit('increment');
            }
        }
      });
    
      var app = new Vue({
        el: '#app',
        components: {
          'like-component': likeComponent
        },
        data: {
          total: 0
        },
        methods: {
          incrementTotal: function() {
            this.total++;
          }
        }
    });
})();