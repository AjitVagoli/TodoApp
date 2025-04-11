import { Children, createContext, useState } from "react";

export const TodoContext=createContext();

export const TodoProvider=({children})=>{
    const [post, setpost]=useState('');
    const [list, setlist]=useState([]);
    const [eindex, seteindex]=useState(null);

    function changehandler(event){
        setpost(event.target.value);
    }

    function clickhandler(){

        if(eindex!==null){
            const ulist=[...list];
            ulist[eindex]=post;
            setlist(ulist);
            seteindex(null);
        }
        else{
            setlist([...list,post]);
        }
        setpost('');
    }

    function dhandler(index){
        setlist(list.filter((_,li)=>(li!==index)));
    }

    function uhandler(index){
        seteindex(index);
        setpost(list[index]);
    }


    return(
        <TodoContext.Provider value=
        {{
            post,
            setpost,
            list,
            setlist,
            eindex,
            seteindex,
            changehandler,
            clickhandler,
            dhandler,
            uhandler
        }}>
            {children}
        </TodoContext.Provider>
    )

}