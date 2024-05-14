import ExpImage from '../../assets/images/abc.png'
import './Experience.scss'

export default function Experience(){
    return(
        <div className="experience-container">
            <h1 className="experience-heading">Experience the Future of Hiring</h1>
            <p className='experience-para'>Watch our introductory video to see how Rework AI revolutionizes the recruitment process</p>
            <img src = {ExpImage} alt = "experience image"/>
        </div>
    )
}