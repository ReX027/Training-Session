import Leaf from "../../assets/images/Leaf.png"

import "./Discover.scss"

function Discover(){
    return(
        <div className="disover-container">
            <div className="disover-heading-container">
                <h1 className="disover-heading">Discover the Power of Rework AI</h1>
            </div>

            <div className="disover-info-container-1">
                <div className="dicover-info-card">
                    <img src={Leaf} alt=""/>
                    <h3 className="dicover-info-card-heading">AI Video Interview</h3>
                    <p className="dicover-info-card-para">Conduct interviews with our AI-powered platform, eliminating scheduling conflicts and reducing time-to-hire.</p>
                </div>

                <div className="dicover-info-card">
                    <img src={Leaf} alt=""/>
                    <h3 className="dicover-info-card-heading">AI Video Interview</h3>
                    <p className="dicover-info-card-para">Conduct interviews with our AI-powered platform, eliminating scheduling conflicts and reducing time-to-hire.</p>
                </div>

                <div className="dicover-info-card">
                    <img src={Leaf} alt=""/>
                    <h3 className="dicover-info-card-heading">AI Video Interview</h3>
                    <p className="dicover-info-card-para">Conduct interviews with our AI-powered platform, eliminating scheduling conflicts and reducing time-to-hire.</p>
                </div>
            </div>

            <div className="disover-info-container-2">
                <div className="dicover-info-card">
                    <img src={Leaf} alt=""/>
                    <h3 className="dicover-info-card-heading">AI Video Interview</h3>
                    <p className="dicover-info-card-para">Conduct interviews with our AI-powered platform, eliminating scheduling conflicts and reducing time-to-hire.</p>
                </div>

                <div className="dicover-info-card">
                    <img src={Leaf} alt=""/>
                    <h3 className="dicover-info-card-heading">AI Video Interview</h3>
                    <p className="dicover-info-card-para">Conduct interviews with our AI-powered platform, eliminating scheduling conflicts and reducing time-to-hire.</p>
                </div>

            </div>
            

        </div>
    )
}

export default Discover