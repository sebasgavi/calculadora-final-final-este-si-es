var numbers = [0,1,2,3,4,5,6,7,8,9];
var symbols = ["+","-","x","÷","=",];

Vue.component('my-button', {
    props: [
        'valor',
        'myEvent'
        
    ],
    methods:{
        myClick: function(){
            this.$emit('myEvent',this.valor);
            
        }
    }
    ,
    template: `
    
    <button v-on:click='myClick'>{{valor}}</button>
    `
});

Vue.component('display', {
    props: [
        'resultado'
    ],
    template:`
    <h1>{{resultado}}</h1>
    `
})

var app = new Vue({
    el: '#app',
    data: {
        resultado: '',
        myNumbers: numbers,
        mySymbols: symbols,
        symbol : '', 
        val1 : '', 
        val2 : '',
        
        
    },
    methods:{
        concat: function(valor){
            this.resultado += valor; 
            console.log("hello"+valor);
        },
        calcular: function(math){
            console.log(this.val1, this.val2); 
            switch(math) {
                
                case "+":
                return (this.val1) + (this.val2) ;  
                
                case "x":
                return (this.val1) * (this.val2) ;  
                
                case "÷":
                return (this.val1) / (this.val2) ;  
                case "-": 
                return (this.val1) - (this.val2) ;  
            }
        }, 
        

        saveNumber: function (symbol){
           
            if(symbol == '='){
                this.val2= parseInt(this.resultado); 
                this.resultado = this.calcular (this.symbol); 
                console.log(this.resultado); 
            } else {
                this.symbol = symbol; 
                this.val1 = parseInt(this.resultado); 
                this.resultado = this.calcular (this.symbol); 
                console.log(this.val1);
    
                
                
            }
          
            
        }
        
        
    },
    template: `
    <div>
    <display :resultado='resultado'></display>
    <my-button v-on:myEvent='concat' v-for='number in myNumbers' :valor='number'></my-button> </br>
    <my-button v-on:myEvent='saveNumber' v-for='symbol in mySymbols' :valor='symbol'></my-button>
    </div>
    `
});

