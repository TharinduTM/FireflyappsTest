import React from 'react'

function Snackbar(props) {

    setTimeout(
    function() {
        props.close(false)
    }
    .bind(this),
    3000
);

    return (
        <div>
            {/* {console.log("prop", props)} */}
            <div className="fixed bottom-5 right-5 w-full">
                <div className="flex justify-end">
                    <div className="xl:w-1/4 lg:w-1/3 sm:w-1/5 w-1/6 ">
                    </div>
                    {props.type==="completed"?<div className="h-12 xl:w-1/4 md:w-2/5 sm:w-3/5 w-4/6 flex justify-between px-4 items-center justify-center... bg-green-600">
                        <div className="flex mt-1 sm:mt-0">
                            <button style={{outline: "none"}} type="button">
                                <i className="fas fa-exclamation-circle text-white font-bold"></i>
                            </button>
                            <div className=" text-sm sm:text-base text-white font-medium ml-4">
                                {props.massege}
                            </div>
                        </div>
                        <button style={{outline: "none"}} type="button" onClick={()=>props.close(false)}>
                            <i className="fas fa-times text-sm sm:text-base text-white font-semibold"></i>
                        </button>
                    </div>:<div className="h-12 xl:w-1/4 md:w-2/5 sm:w-3/5 w-4/6 flex justify-between px-4 items-center justify-center... bg-red-600">
                        <div className="flex mt-1 sm:mt-0">
                            <button style={{outline: "none"}} type="button">
                                <i className="fa fa-check-circle text-white" aria-hidden="true"></i>
                            </button>
                            <div className="text-sm sm:text-base text-white font-medium ml-4">
                                {props.massege}
                            </div>
                        </div>
                        <button style={{outline: "none"}} type="button" className="cursor-pointer" onClick={()=>props.close(false)}>
                            <i className="fas fa-times text-sm sm:text-base text-white font-semibold"></i>
                        </button>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Snackbar