
export var increament=()=>{
    console.log("pakistan")
    return {
        type: 'INC'
    }
}

export var decreament=()=>{
    return {
        type: 'DEC'
    }
}

export var asyncIncreament=(value)=>{
    return (dispatch)=>{
        dispatch(increament())
    }
}

export var asyncDecreament=()=>{
    return (dispatch)=>{
        dispatch(decreament())
    }
}

 // thunk with timer
    export var asyncIncreamentTimer=()=>{
        return (dispatch)=>{
          setTimeout(()=>{
              dispatch(increament());
          },1000)
        }
    }
     export var asyncDecreamentTimer=()=>{
        return (dispatch)=>{
          setTimeout(()=>{
              dispatch(decreament());
          },1000)
        }
    }


