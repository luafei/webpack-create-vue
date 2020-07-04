const App = {
    template: `
        <div>
            <h2>{{message}}</h2>
            <button v-on:click="mybutton('mmmm')">按钮</button>
            <p>{{date}}</p>
        </div>
    `,
    data() {
        return {
            message: 'vue hello',
            date: new Date()
        }
    },
    methods: {
        mybutton: function (param) {
            window.alert('按钮！' + param);
        }
    }

};

module.exports = App;