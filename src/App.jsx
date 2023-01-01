import React from "react";
import Heading from "./Heading";
import Para from "./para";
import OrderList from "./orderList";

function App(){
    return(
        <React.Fragment>
            <Heading></Heading>
            <Para></Para>
            <OrderList></OrderList>
        </React.Fragment>
    )
}
export default App;