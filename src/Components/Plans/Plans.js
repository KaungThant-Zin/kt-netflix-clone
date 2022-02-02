import "./Plans.css"
import { useState } from "react"
const Plans = (props) => {

    const [btnpack, setBtnpack] = useState(false)
    const packageHandler = e => {
        e.preventDefault();
       setBtnpack(!btnpack)
    }


    return (
        <div className="plan-detail">
            <div className="plan-name">
                <div>
                    <h4>{props.planname}</h4>
                    <h5>{props.plantype}</h5>
                </div>
            </div>
            <button onClick={packageHandler} className={btnpack ? "plan-btn-gray" : "plan-btn"}>{btnpack ? "Current" : "Subscribe"}</button>
        </div>
    )
}

export default Plans
