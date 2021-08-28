import React from 'react'
import { Link } from "react-scroll";

function Category(props) {
    return (
        <div className="md:fixed w-full md:w-2/12 md:px-0 px-4">
            <div className=" mt-8">
                <div className="text-gray-400 font-semibold text-lg mb-8">
                    Categories
                </div>

                {/* Get title */}
                {Object.values(props.menu).map((cat) => {
                    return (
                        <div key={Math.random()} className="shadow-md w-11/12 h-10 border-2 border-gray-200 pl-2 flex flex-wrap content-center bg-white text-gray-400 font-semibold">
                            <Link to={cat.title}>
                                {cat.title}
                            </Link>                               
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Category
