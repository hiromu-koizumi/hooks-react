import {useState,useEffect} from 'react';
import axios from 'axios';

const useResources = (resource) => {

    const [resources,setResources] = useState([])

    useEffect(() => {
        (async resource => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
            console.log('didmount')
            //useStateを呼び出したら再レンダーされる
             setResources(response.data);
     })(resource);
    },
     //第２引数をつけるとこの引数が変化したときだけ呼び出される。
     //通常はレンダー後、毎回
     //[]にすると最初のレンダー後だけ呼び出される
     [resource]
    );
return resources;
};

export default useResources;