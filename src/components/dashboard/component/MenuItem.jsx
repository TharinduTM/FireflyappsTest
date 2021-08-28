import React, { useState } from 'react'
import Model from './Model'

function MenuItem(props) {
    const [modelOpen, setModelOpen] = useState(false)
    const [title, setTitle] = useState("")
    const [cardDetails, setCardDetails] = useState([{price: "", size: ""}])

    const buttonHandle=(val)=>{
        setModelOpen(true)
        setTitle(val.title)
        let card =[]
        {
            Object.values(val.data).map((q) => {
                card = [...card, { price: q.price, size: q.size, id: q.item_id }]
            })
        }
        setCardDetails(card)
    }
    return (
        <>
            {Object.values(props.menu).map((e) => {
                return (
                    <section id={e.title}  key={Math.random()}>
                        <div>
                            <div className="fixed z-30 bg-gray-50 w-5/12 lg:w-5/12 xl:w-5/12 h-16"></div>
                            <div className="text-gray-400 font-semibold text-lg sticky top-0 md:top-8 z-30 bg-gray-50 md:px-0 md:mt-0 px-4 mt-8">
                                {e.title}
                            </div>

                            <div className="mt-12 mb-4">
                                {Object.values(e.data).map((a) => {
                                    return (
                                        <div key={Math.random()} className="shadow-md bg-white z-0 w-full h-14 mt-2 border-1 border-gray-200 pl-2 flex flex-wrap content-center text-gray-400 font-semibold">
                                            <button onClick={()=>buttonHandle(a)}>
                                                {a.title}
                                            </button>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </section>
                )
            })}
            <Model open={modelOpen} close={()=>setModelOpen(false)} title={title} details={cardDetails} />
        </>
    )
}

export default MenuItem
