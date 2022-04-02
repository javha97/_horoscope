import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { data } from './Json';
import { Verify } from './Verification';
import { Sign } from './Sign';
import { Dataofsign } from './Dataofsign';
function App() {
  const [bool, setbool] = useState(false)
  const [btntext, setbtntext] = useState('TODAY')
  const [sign, setsign] = useState('PISCES')
  const [date, setdate] = useState(false)
  const [arrow, setarrow] = useState(false)
  const [obj, setobj] = useState({})
  const [systems, setsystems] = useState(false)
  const [isloading,setisloading]=useState(false)
  const system = () => {
    setsystems(!systems)
  }
  const clickbtn = () => {
    setbool(!bool)
  }
  const clicksign = (e) => {
    setsign(e.target.innerText)
    setbool(!bool)
  }
  const clickitem = (e) => {
    setbtntext(e.target.innerText);
    setdate(!date)
  }
  const fn = async () => {
    const options = {
      method: 'POST',
      url: 'https://sameer-kumar-aztro-v1.p.rapidapi.com/',
      params: { sign: sign, day: btntext },
      headers: {
        'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com',
        'X-RapidAPI-Key': 'ee0aec182amsh2c48de365382f49p1e8127jsn1b026897dbeb'
      }
    };
    axios.request(options).then(function ({ data }) {
      console.log(data);
      setobj(data)
      setisloading(true)
    }).catch(function (error) {
      console.error(error);
    });

  }
  const clickarrow = () => {
    fn()
    setarrow(!arrow)
  }
  const datebtn = () => {
    setdate(!date)
  }
  return (
    <div>
      <div className='maincontainer flex'>
        <div className='containerData'>
          {systems ? <>{data.map(({ title, text }, i) => {
            return <Verify title={title} text={text} key={i} />
          })} </> : <div className='spacex'>
            <div className='flex textab fontofrocket'>
              <div style={{ color: 'white' }}>CABIN MICS:</div>
              <div style={{ color: 'red' }}>RECORDING</div>
            </div>
          </div>}

          <div className='flex ab'>
            {systems ? <div className='clickedleftbot' onClick={system}>SYSTEMS</div> :
              <div className='leftbot' onClick={system}>SYSTEMS</div>}
            {!systems ? <div className='clickedleftbot' onClick={system}>CABIN</div> :
              <div className='leftbot' onClick={system}>CABIN
              </div>}
          </div>
        </div>
        <div className='seccont'>
          <div>
            <div className='horos'>HOROSCOPE</div>
          </div>
          {!arrow ? <>
            <div className='flex spacebtwn'>
              <div className='size'>
                <div className='font'>SIGN</div>
                <button onClick={clickbtn}>{sign}
                  <img className='toparrow' src={process.env.PUBLIC_URL + 'toparrow.png'} alt="#"></img>
                </button>
                {bool && <Sign clicksign={clicksign} />}
              </div>
              <div className='size'>
                <div className='font'>DATE</div>
                <button onClick={datebtn}>{btntext}
                  <img className='toparrow' src={process.env.PUBLIC_URL + 'toparrow.png'} alt="#"></img>
                </button>
                {date && <div className='contofsign'>
                  <div className="fn" onClick={(e) => clickitem(e)}>Today</div>
                  <div className="fn" onClick={(e) => clickitem(e)}>Tomorrow</div>
                  <div className="fn" onClick={(e) => clickitem(e)}>Yesterday</div>
                </div>}
              </div>
              <div className='arrow' onClick={clickarrow}></div>
            </div>  </>
            : <Dataofsign isloading={isloading} obj={obj} />
          }
        </div>
      </div>
    </div>

  );
}

export default App;
