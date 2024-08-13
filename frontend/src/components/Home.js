// import { useEffect, useState } from 'react'
// import { createTodo, getALLTodo } from '../actions/todoActions'

// const Home = () => {

//     useEffect(() => {
//         fetchTodo()
//     }, [])

//     const [data, setData] = useState({
//         title: '',
//         description: '',
//         id: ''
//     })

//     const [allTodos, setAllTodos] = useState([])

//     useEffect(() => {
//         console.log('todos', allTodos)
//     }, [allTodos])

//     const handleChange = event => {
//         setData({ ...data, [event.target.name]: event.target.value })
//     }

//     const handleSubmit = () => {
//         console.log("title", data.title);
//         console.log("description", data.description);
//         const body = {
//             title: data.title,
//             description: data.description
//         }

//         createTodo(body).then((res) => { console.log('response', res) })
//             .catch((err) => { console.log(err) })
//     }


//     const fetchTodo = async () => {
//         const res = await getALLTodo()
//         setAllTodos(res.data)
//         console.log(res)

//     }

//     const handleUpdate=(elem)=>{
//         console.log('elem',elem)
//     }

//     return (
//         <div>
//             <label>Title</label>
//             <input type="text" name="title" value={data.title} placeholder='Enter Title' onChange={handleChange} />

//             <br/>

//             <label>description</label>
//             <input type="text" name="description" value={data.description} placeholder='Enter Description' onChange={handleChange} />

//             <br/>

//             <button className='btn btn-primary col-1 mt-2' placeholder="Submit" onClick={handleSubmit}>Submit</button>
//             <br/>
//             <button className='btn btn-primary col-1 my-2' placeholder="Fetch" onClick={fetchTodo}>Fetch</button>

//             <div>

//                 {allTodos.map((element, i) => (
//                     <div className='border border-primary col-md-19 my-2' >
//                         <div key={i} >
//                             <h3>{element.title}</h3>
//                             <p>{element.description}</p>

//                             <button className='btn btn-primary' onClick={()=>{handleUpdate(element)}}>UPDATE</button>
//                         </div>
//                     </div>
//                 )
//                 )}
//             </div>
//         </div>
//     )
// }

// export default Home;



import { useEffect, useState } from 'react';
import { createTodo, getALLTodo, DeleteTodo, UpdateTodo } from '../actions/todoActions';

const Home = () => {
    useEffect(() => {
        fetchTodo();
    }, []);

    const [data, setData] = useState({
        title: '',
        description: '',
        id: ''
    });

    const [allTodos, setAllTodos] = useState([]);

    useEffect(() => {
        console.log('todos', allTodos);
    }, [allTodos]);

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const handleSubmit = async () => {
        console.log("title", data.title);
        console.log("description", data.description);
        const body = {
            title: data.title,
            description: data.description
        };

        try {
            const res = await createTodo(body);
            console.log('response', res);
        } catch (err) {
            console.log(err);
        }
    };

    const fetchTodo = async () => {
        try {
            const res = await getALLTodo();
            setAllTodos(res.data);
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    };

    const handleUpdate = (elem) => {
        setData({
            title: elem.title,
            description: elem.description,
            id: elem.id
        });
    };

    const handleUpdateTodo = async (elem) => {
        const body = {
            title: data.title,
            description: data.description
        };
        try {
            const res = await UpdateTodo(elem._id,body);
            console.log('response', res);
        } catch (err) {
            console.log(err);
        }
        fetchTodo();
    }

    const handleDelete = async (elem) => {
        const res = await DeleteTodo(elem._id);
        console.log(res);

        fetchTodo();
    }

    return (
        <div>
            <label>Title</label>
            <input
                type="text"
                name="title"
                value={data.title}
                placeholder="Enter Title"
                onChange={handleChange}
            />

            <br />

            <label>Description</label>
            <input
                type="text"
                name="description"
                value={data.description}
                placeholder="Enter Description"
                onChange={handleChange}
            />

            <br />

            <button
                className="btn btn-primary col-1 mt-2"
                onClick={handleSubmit}
            >
                Submit
            </button>
            <br />
            <button
                className="btn btn-primary col-1 my-2"
                onClick={fetchTodo}
            >
                Fetch
            </button>

            <div>
                {allTodos.map((element, i) => (
                    <div key={element.id} className="border border-primary col-md-19 my-2" onClick={() => handleUpdate(element)}>
                        <div>
                            <h3>{element.title}</h3>
                            <p>{element.description}</p>

                            <button className="btn btn-primary" onClick={() => handleUpdateTodo(element)}>
                                UPDATE
                            </button>

                            <button className="btn btn-primary mx-4" onClick={() => handleDelete(element)}>
                                DELETE
                            </button>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;