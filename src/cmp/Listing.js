import React, {Component} from 'react';

class Listing extends Component{
    constructor(){
        super();
        this.state={
            items : null,
        }
    }

    componentDidMount(){
        /* fetch('http://localhost:8080/api/product').then((result)=>{
            result.json().then((data)=>{
                console.log(data);
                this.setState({items: data})
            })
        }) */   
        //commented for local as we dont have service call
        this.setState({
            items: [{"id":1,"name":"Mi","category":"mobile","price":"111"},
                    {"id":2,"name":"Google","category":"web","price":"222"},
                    {"id":3,"name":"Yahoo","category":"web","price":"333"}],
        })
    }

    render(){
        return (
            <div>
                {
                    this.state.items ? 
                    this.state.items.map((item)=>(
                        <div key={item.id}>
                            <span>name: {item.name}</span>
                            <span>category: {item.category}</span>
                            <span>price: {item.price}</span>
                        </div>
                    )) : null
                }
            </div>
        )
    }
}

export default Listing;