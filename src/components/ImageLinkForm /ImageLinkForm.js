import React from 'react'
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return(
        <div>
            <p className='f4'>
                {'This magical ML brain will detect faces yo!'}
            </p>
            <div className='center'>
                <div className='form pa4 br4 shadow-2'>
                    <input className='w-70' type='text' onChange={onInputChange} />
                    <button className='pa1  br-pill bg-light-purple white w-20 pointer dim'
                        onClick={onButtonSubmit}
                    >{'Detect'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm
