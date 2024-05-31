import React from 'react'

export default function DialogConfirmation() {
    return (

        <div className='d-flex cont-confirm-total-share'>
            <div className='confirm-total-text-w-t'>
                <span className='text-confirm-total-w-s'>Total</span>
                <span className='text-confirm-total-w-s'>MXN <b className='text-confirm-total-w'>$00,000.<sup>00</sup></b></span>
            </div>
            <div className="share-confirm-test-tour">
                <img
                    className="icons-info-tour"
                    src="https://sandboxmexico.com/assets/icons/share/share-w.svg"
                    alt="share-icon"
                />
                <span className='text-confirm-share-w'>Compartir itinerario</span>
            </div>
        </div>
    )
}
