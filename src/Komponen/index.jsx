import React from "react";
import Registration from "./Registration/Registration";

export default class Komponen extends React.Component {
    render(){
        return(
            <div>
                <Registration />
            </div>
        )
    }
}

// state = {
//     value: 0
// }

// handleValue = (data) => {
//     this.setState({
//         value: data
//     });
// }

// render() {
//     return(
//         <div>
//             <Bar value={this.state.value}/>
//             <Product receiveValue={this.handleValue}/>
//         </div>
//         )
// }

// export default class Komponen extends React.Component {
//     state = {
//         isLoading : true
//     }

//     render(){
//         setTimeout(() => {
//             this.setState({
//                 isLoading: false
//             })
//         }, 3000)

//         return(
//             <div>
//                 { this.state.isLoading
//                     ? <h1>Loading...</h1>
//                     : <Product />
//                 }
//             </div>
//         )
//     }
// }