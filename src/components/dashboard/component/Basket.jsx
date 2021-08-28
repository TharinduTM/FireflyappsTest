import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { connect, useDispatch, useStore } from 'react-redux';
import { removeCard } from '../../../actions/AddCard';

function Basket(props) {
        const dispatch = useDispatch();
        const [total, setTotal] = useState(0)

        useEffect(() => {
            let dumyTotal=0
            props.cards.cards.map((item)=>{
                dumyTotal=dumyTotal+parseFloat(item.price);
            })
            setTotal(dumyTotal.toFixed(2))
        }, [props.cards.cards])

        let count=0;
    return (
        <div className="fixed ml-8 mt-8 w-64 lg:w-80">
            <div className="text-gray-400 font-semibold text-lg mb-8">
                Basket
            </div>
            <div style={{backgroundColor: "#ff4f70"}} className="px-4 py-2 text-white font-semibold">
                <div className="flex justify-start gap-1">
                    <p className="font-bold">Online Ordering</p>
                    <p>is currently closed.</p>
                </div>
                <p>Please come back later.</p>
            </div>
            <div className="px-5 py-2 bg-white text-gray-400 h-60 mt-3 shadow-md overflow-y-auto">

            {/* Show card items */}
            {props.cards.cards.length?props.cards.cards.map((item)=>{
                count=count+1;
                return(
                    <div className="flex justify-between text-sm mt-1" key={Math.random()}>
                        <div className="flex justify-between">
                            <div className="mr-4">
                                {count}
                            </div>
                            <div className="truncate mr-4 lowercase xl:w-44 lg:w-40 w-28">
                                {item.title}
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="mr-4 flex mt-0.5">
                                <i className="fas fa-euro-sign font-semibold text-xs mt-1 mr-1"></i>
                                {item.price}
                            </div>
                            <div>
                                <button onClick={()=>dispatch(removeCard(item.id))}>
                                    <i className="far fa-times-circle text-red-400 text-lg"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }):
                <div className=" py-8">
                    <div className="flex justify-center mt-8">
                        <i className="fa fa-spoon mr-2 text-6xl text-blue-400" aria-hidden="true"></i>
                        <i className="fa fa-glass text-6xl text-blue-600" aria-hidden="true"></i>
                    </div>
                    <div className="flex justify-center mt-4">
                        Start adding items to your order...
                    </div>
                </div>}
            </div>
            
            {/* Show total */}
            <div className="mt-4 flex px-10 h-12 bg-white shadow-md text-gray-400 py-3">
                <div className="flex justify-between w-full text-lg gap-3">
                    <div>
                        Total
                    </div>
                    <div className="flex">
                        <i className="fas fa-euro-sign font-semibold text-xs mt-1.5 mr-1"></i>
                        {total}
                    </div>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(store){
    return{
        cards: store.cards
    }
}

export default connect(mapStateToProps)(Basket)
