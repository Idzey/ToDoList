import { useRef, useState } from "react";

function Form({list, setList}) {
    const [name, setName] = useState("");
    let inputRef = useRef();
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
                <input ref={inputRef} onKeyDown={downEnter} onChange={evt => setName(evt.target.value)} type="text" name="" id="" placeholder='Name task...' className='p-3 bg-zinc-700' />
                <button className='py-3 px-6 bg-zinc-700' onClick={createTask}>add</button>
            </div>
        </div>
    )
}
export default Form;