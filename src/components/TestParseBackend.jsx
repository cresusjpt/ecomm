import axios from "axios"
import { useState } from "react";

function TestParseBackend(){
    let [list, setList] = useState([]);
    /*axios.baseUrl('http://localhost:82/web_back/api/web');*/
    
    
    axios.get('http://localhost:82/web_back/api/web/product/',function(req, res){
        res.header("Access-Control-Allow-Origin", "*");
        res.send('Hello World');
    })
    .then((response)=>{
        let value = response.data;
        setList(value);
    }).catch((error)=>{
        console.error(error);
    })

    return (
        <>
        {list.map((produit)=> <li>{produit.nom}</li> )}
        </>
    );
}

export default TestParseBackend