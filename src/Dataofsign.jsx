import './App.css'
export const Dataofsign = ({ obj, isloading }) => {
    if (isloading === false) {
        return <div>....isLoading</div>
    }
    return (
        <div className='flex center'>
            <div className='flex contofdata'>
                <div className="square">
                    <div className="ellipse">
                        <div className='color'>COLOR</div>
                        <div className='objcolor objfont'>{obj.color}</div>
                    </div>
                </div>
                <div className="square">
                    <div className="ellipse">
                        <div className='color'>LUCKY TIME</div>
                        <div className='objtime objfont'>{obj.lucky_time}</div>
                    </div>
                </div>
                <div className="square">
                    <div className="ellipse">
                        <div className='color'>LUCKY NUMBER</div>
                        <div className='objnum objfont'>{obj.lucky_number}</div>
                    </div>
                </div>
                <div className="square">
                    <div className="ellipse">
                        <div className='color'>MOOD</div>
                        <div className='objmood objfont'>{obj.mood}</div>
                    </div>
                </div>
                <div className="square">
                    <div className="ellipse">
                        <div className='color'>COMPATIBILITY</div>
                        <div className='objcomp objfont'>{obj.compatibility}</div>
                    </div>
                </div>
            </div>
            <div className='flex center1 center'>
                <div className='fontofdesc'>{obj.description}</div>
            </div>
        </div>
    )
}