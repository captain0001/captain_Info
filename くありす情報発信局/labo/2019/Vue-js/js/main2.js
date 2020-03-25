(function() {
    //エラーチェック用
    'use strict'

    
    // two way data binding (to UI)

    var vm = new Vue({
      el: '#app',
      data: {
        newItem: '',
        // todos: [{
        //   title: 'task 1',
        //   isDone: false
        // }, {
        //   title: 'task 2',
        //   isDone: false
        // }, {
        //   title: 'task 3',
        //   isDone: true
        //}]
        todos: []
      },
      watch: {
        // todos: function() {
        //   localStorage.setItem('todos', JSON.stringify(this.todos));
        //   alert('Data saved!');
        // }
        todos: {
          handler: function() {
            localStorage.setItem('todos', JSON.stringify(this.todos));
            // alert('Data saved!');
          },
          deep: true
        }
      },
      mounted: function() {
        this.todos = JSON.parse(localStorage.getItem('todos')) || [];
      },
      methods: {
        // addItem: function(e) {
        //   e.preventDefault();
        //   this.todos.push(this.newItem);
        // }
        addItem: function() {
          var item = {
            title: this.newItem,
            isDone: false
          };
          this.todos.push(item);
          this.newItem = '';
        },
        deleteItem: function(index) {
          if (confirm('削除してもよろしいでしょうか?')) {
            this.todos.splice(index, 1);
          }
        },
        purge: function() {
          if (!confirm('完了したタスクを削除してもよろしいでしょうか?')) {
            return;
          }
          // this.todos = this.todos.filter(function(todo) {
          //   return !todo.isDone;
          // });
          this.todos = this.remaining;
        }
      },
      computed: {
        remaining: function() {
          // var items = this.todos.filter(function(todo) {
          //   return !todo.isDone;
          // });
          // return items.length;
          return this.todos.filter(function(todo) {
            return !todo.isDone;
          });
        }
      }
    });
})();