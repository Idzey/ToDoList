function List({list, setList}) {
    function deleteList(evt) {
        let newList = [...list];
        newList.splice(evt.target.id, 1);
        setList(newList);
        document.cookie = JSON.stringify(newList);
    }
    return (
        <div className='flex flex-col justify-between rounded-sm h-3/4'>
            <h2 className='border-b-2 border-t-2 text-3xl'>List</h2>
            <div className='h-full flex justify-center items-center'>
                <ul className='h-full w-full max-h-full flex flex-col flex-wrap gap-4 py-4 px-10 content-start'>
                    {list.map((item, index) => 
                        (<li className='flex justify-between items-center w-1/3 text-start border-b-2 py-2' key={index}>{index + 1}. {item} 
                        <span onClick={deleteList} className="ml-2 text-red-600 cursor-pointer py-1 px-2 border rounded-md" id={index}>x</span>
                        </li>)
                    )}
                </ul>
            </div>
        </div>
    )
}
export default List;