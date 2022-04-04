import React, { Component } from 'react'
import PageHeader from '../template/pageheader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {
    //associo o this com o componente atual
    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }


        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleChange(e){

        this.setState({...this.state, description: e.target.value})

    }

    handleAdd(){

    }


    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
                <TodoForm description={this.state.description}
                handleChange={this.handleChange}
                handleAdd={this.handleAdd}/>
                <TodoList/>
            </div>
        )
    }
}