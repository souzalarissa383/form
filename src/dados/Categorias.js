export default class Categorias{
    constructor(){
        this.categorias = [];
        this._inscritos = [];
    }
//metodo que ira receber listagem
    inscrever(func){
        this._inscritos.push(func);
    }

    desinscrever(func){
        console.log(this._inscritos.length)
        this._inscritos = this._inscritos.filter(f => f !== func);
        //imprimir quantidade de inscritos
        console.log(this._inscritos.length)
    }

    notificar(){
        this._inscritos.forEach(func =>{
            func(this.categorias);
        } );
    }
    adicionarCategoria(novaCaegoria){
        this.categorias.push(novaCaegoria);
        this.notificar();
    }
}