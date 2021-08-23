import Localbase from 'localbase'
import { useEffect } from 'react'

export default function Rating({id}){
  useEffect( function(){
    if (id === undefined){
      return
    }
    console.log( id)
    
    let db = new Localbase('db')
    var rate = 0
    db.collection('rateing').add({
      id:  id ,
      rateing: rate
    },id)
    
    db.collection('rateing').get().then(result => {
      if( result.rateing === undefined)
      console.log(result.rateing)
    })
  },[id])
  function updateRateing(rate){
    let db = new Localbase('db')

    db.collection('rateing').doc({ id: id  }).update({
      rateing: rate
    })

    
  }


  return(
    <div>

      <select onChange={ (e) => updateRateing(e.target.value)} name="score" id="rate">
        <option value="0">Select</option>
        <option value="5">5 Greate</option>
        <option value="4">4 Good</option>
        <option value="3">3 Average</option>
        <option value="2">2 Bad</option>
        <option value="1">1 Horrible</option>
      </select>
      
    </div>
  )
}