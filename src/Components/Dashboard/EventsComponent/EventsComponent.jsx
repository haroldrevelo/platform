import React from 'react';
import style from './EventsComponent.module.css'
import Slider from './Carousel/Slider'
import img1 from './img/img64'
import EventsToday from './Today/EventsToday';

function EventsComponent() {
    const images = [img1, img1, img1]
    return (
        <>
            <div>
                <h2 className={style.title}>Events</h2>
            </div>
            <div className="row mt-5">
                <div className="col-8">
                    <div>
                        <Slider slides={images} />
                    </div>
                </div>
                <div className="col-4">
                    <EventsToday/>
                </div>

            </div>
        </>
    )
}

export default EventsComponent