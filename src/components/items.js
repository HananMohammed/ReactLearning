import React, { Component} from 'react' ;
import './item.css';
class Items extends Component{

    constructor(){
        super();
        console.log("Constructor")
    }
    render() {
        console.log("Render")
        const {items} = this.props;
        const theItems = items.map(item => {
                return item.count>0?(
                    //ternal if
                
                    <div className="item" key={item.id}>
                        <div>{item.id}</div>
                        <div>{item.name}</div>
                        <div>{item.age}</div>
                    </div>
                ):null

        })

        return(
            <div>
                
                {theItems}
            </div>
        )
     
    }
}

export default Items ;