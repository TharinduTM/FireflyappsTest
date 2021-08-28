import React from 'react'
import { useDispatch } from 'react-redux'
import { addCard } from '../../../actions/AddCard';

function Model(props) {
    const dispatch = useDispatch();

    const storeHandle=(data)=>{
        props.close()
        dispatch(addCard({ id: data.id, price: data.price, size: data.size, title: props.title }));
    }
    return (
        <>
            {props.open ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative xl:w-4/12 lg:w-5/12 md:w-6/12  sm:w-7/12 w-10/12 my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative p-7 flex-col w-full bg-gray-100 outline-none focus:outline-none">
                                <div className="flex justify-between">
                                    <div className="text-2xl text-gray-400 font-semibold truncate mr-5">
                                        {props.title}
                                    </div>
                                    <button onClick={()=>props.close()} style={{outline: "none"}} className="transition duration-500 transform hover:scale-125 mt-1 mb-4">
                                        <i className="far fa-times-circle text-gray-400 text-lg"></i>
                                    </button>
                                </div>
                                <div className="grid grid-cols-2">
                                    {
                                        props.details.length > 1 &&
                                            props.details.map((data) => {
                                                return (
                                                        <div key={Math.random()} className="shadow-md p-4 m-2 text-sm bg-white">
                                                            <div className="text-xs text-center text-gray-400 font-semibold lowercase">
                                                                {props.title}
                                                            </div>
                                                            <div className="flex justify-center mt-2 font-semibold">
                                                                {data.size}
                                                            </div>
                                                            <div className="flex justify-center mt-1 font-semibold">
                                                                <i className="fas fa-euro-sign font-semibold text-xs mt-1 mr-1"></i>
                                                                {data.price}
                                                            </div>
                                                            <div className="flex justify-center">
                                                            <button onClick={()=>storeHandle(data)} style={{outline: "none"}} className="text-white transition duration-500 transform hover:scale-105 bg-green-500 px-4 py-2 mt-4">
                                                                    Add to Order
                                                                </button>
                                                            </div>
                                                        </div>
                                                )
                                            })
                                            
                                    }
                                </div>
                                {
                                    props.details.length===1&&
                                    props.details.map((data) => {
                                        return(
                                            <div key={Math.random()} className="flex justify-end w-full">
                                                <button onClick={()=>storeHandle(data)} style={{outline: "none"}} className="text-white transition duration-500 transform hover:scale-105 px-10 font-bold py-2 mt-10" style={{backgroundColor: "#22ca80"}}>
                                                    Add to Order
                                                </button>
                                            </div>
                                        )
                                    })

                                }
                                
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    )
}

export default Model
