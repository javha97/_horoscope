export const Sign=({clicksign})=>{
   return(
       <div className="contofsign margintop">
           <div className="fn" onClick={(e)=>clicksign(e)}>Aries</div>
           <div className="fn" onClick={(e)=>clicksign(e)}>Taurus</div>
           <div className="fn" onClick={(e)=>clicksign(e)}>Gemini</div>
           <div className="fn" onClick={(e)=>clicksign(e)}>Cancer</div>
           <div className="fn" onClick={(e)=>clicksign(e)}>Leo</div>
           <div className="fn" onClick={(e)=>clicksign(e)}>Virgo</div >
           <div className="fn" onClick={(e)=>clicksign(e)}>Libra</div>
           <div className="fn" onClick={(e)=>clicksign(e)}>Scorpio</div>
           <div className="fn" onClick={(e)=>clicksign(e)}>Sagittarius</div >
           <div className="fn" onClick={(e)=>clicksign(e)}>Capricorn</div>
           <div className="fn" onClick={(e)=>clicksign(e)}>Aquaris</div>
           <div className="fn" onClick={(e)=>clicksign(e)}>Pisces</div>
       </div>
   )
}