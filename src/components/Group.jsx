import React from 'react'
import './Group.css'

const Group = (props) => {
    return (
        <div className='groups'>
            <div className="group">
                <div className="g1-head">
                    {props.h}
                </div>
                <div className="items">
                    <div className="item1">
                        <span><iconify-icon icon="ic:twotone-dashboard"></iconify-icon></span><span>{props.c1}</span>
                    </div>
                    <div className="item1">
                        <span><iconify-icon icon="ic:twotone-dashboard"></iconify-icon></span><span>{props.c2}</span>
                    </div>
                    <div className="item1">
                        <span><iconify-icon icon="ic:twotone-dashboard"></iconify-icon></span><span>{props.c3}</span>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Group;

