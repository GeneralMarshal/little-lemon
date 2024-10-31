
import { useReducer } from "react"

export default function TestComponent(){
    function reducer(state, action){
        switch (action.type) {
            case "increment":
                return{count: state.count +=1 }
        }
        switch(action.type){
            case "decrement":
                return{count: state.count -=1 }

        }
    }
    const [state, dispatch] = useReducer(reducer, {
        count : 0
    })

    return (
      <>
        <div>
          <h1> count: {state.count}</h1>
          <button
            onClick={() => {
              dispatch({ type: "increment" });
            }}
          >
            increment
          </button>
          <button
            onClick={() => {
              dispatch({ type:  "decrement" });
            }}
          >
            decrement
          </button>
        </div>
      </>
    );
}