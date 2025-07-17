const ship=(len)=>{
    let times_hit=0
    const hit=()=>{
        times_hit++
    }
    const getLen=()=>{
        return len
    }
    const isSunk=()=>{
        return times_hit>=len
    }
    const getTimesHit=()=>{
        return times_hit
    }
    return{ hit,isSunk,getLen,getTimesHit}
}
export{ship}