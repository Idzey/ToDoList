import { useEffect, useRef, useState } from "react";

function Form({list, setList}) {
    const [name, setName] = useState("");
    const [check, setCheck] = useState(false);
    let checkRef = useRef();
    let inputRef = useRef();

    useEffect(() => {
        if (check) {
            inputRef.current.type = "date";
        } else {
            inputRef.current.type = "text";
        }
    }, [check]);
    
    function checkClick() {
        setCheck(!check);
        setName("");
        inputRef.current.value = "";
    }

    function downEnter(evt) {
        if (evt.code == "Enter") createTask(evt);
    }

    function createTask() {
        if (name.trim()) {
            let editName = name.replaceAll(";", "");
            setList(prev => [...prev, editName]);
            document.cookie = JSON.stringify([...list, editName]);
            inputRef.current.value = "";
            setName("");
        }
    }
    return (
        <div className='h-1/4 flex flex-col justify-between rounded-sm'>
            <h2 className='border-b-2 text-3xl'>Add menu</h2>
            <div className='flex gap-10 h-full justify-center items-center p-5'>
                <input ref={inputRef} onKeyDown={downEnter} onChange={evt => setName(evt.target.value)} type="text" placeholder='Name task...' className='p-3 bg-zinc-700 w-70' />
                <label className={"inline-flex items-center cursor-pointer"}>
                    <input ref={checkRef} onClick={checkClick} type="checkbox"  className="sr-only peer"/>
                    <span className={"ms-3 text-sm font-medium text-gray-900 dark:text-gray-300 mr-2"}>Date?</span>
                    <div className={"relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"}></div>
                </label>
                <button className='py-3 px-6 bg-zinc-700' onClick={createTask}>add</button>
            </div>
        </div>
    )
}
export default Form;