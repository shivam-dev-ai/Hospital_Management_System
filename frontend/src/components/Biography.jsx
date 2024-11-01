import React from 'react'

const Biography = ({ imageurl }) => {
    return (
        <div className='container biography'>
            <div className="banner">
                <img src={imageurl} alt="nothing" />
            </div>
            <div className="banner">
                <p>Biography</p>
                <h3>Who We Are</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis cupiditate necessitatibus quia saepe reiciendis neque aliquam? Excepturi fugiat nesciunt recusandae quaerat eius deleniti aspernatur maxime adipisci. Tenetur harum soluta sit officiis voluptatem doloremque reiciendis?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem blanditiis sequi, autem qui fugiat natus? Doloremque officia dolorum tenetur esse.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero nulla ullam fuga voluptates laudantium animi nihil dolore.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos asperiores cum sunt!</p>
                <p>Lorem ipsum dolor sit.</p>
            </div>
        </div>
    )
}

export default Biography
