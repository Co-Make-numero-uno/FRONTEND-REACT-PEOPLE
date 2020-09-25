import React from 'react';

const Upvotes = props => {
    return (
        <div className="upvotes">
            <button onClick={props.sendUpvote}>
                <img style={{verticalAlign: "middle"}} width="35" src={"https://i.pinimg.com/originals/52/55/d0/5255d09ed4f8622b912661775f26bd58.png"}/>
                 : {props.votes}
            </button>
        </div>
    )
}

export default Upvotes;