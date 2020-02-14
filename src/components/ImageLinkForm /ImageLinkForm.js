import React from 'react'
import './ImageLinkForm.css'

const ImageLinkForm = () => {
    return(
        <div>
            <p className='f3'>
                {'This magical ML brain will detect faces yo!'}
            </p>
            <div className='center'>
                <div className='form pa5 br4 shadow-2'>
                    <input className='w-70' type='text'/>
                    <button className='pa1 br-pill bg-light-purple white w-20 pointer dim'>
                        {'Detect'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm
