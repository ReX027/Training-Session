import imageOfExperience from '../../assets/images/Product Image.png'
import LeafIcon from '../../assets/icons/LeafIcon'
import LandingPageLockIcon from '../../assets/icons/LandingPageLockIcon';
import LandingPageAiProctoring from '../../assets/icons/LandingPageAiProctoring';
import LandingPageSeamless  from '../../assets/icons/LandingPageSeamless';


import './ExperienceTheFeature.scss'


function ExperienceTheFeature() {
  return (
    <>
    <section className="experience_feature">
      <div className="heading">
        <h4>Experience the Future of Hiring</h4>
        <span>Watch our introductory video to see how Rework AI revolutionizes the recruitment process</span>
      </div>
      <div className='image'>
        <img src={imageOfExperience} alt=''/>
      </div>
    </section>
    <section className='discover_power'>
      <div className='heading'>
        <h4>Discover the Power of Rework AI</h4>
      </div>
      <div className='box_list'>
        <div className='box'>
          <LeafIcon/>
          <div className='title'>
            <span>AI Video Interview</span>
          </div>
          <div className='description'>
            <p>Conduct interviews with our AI-powered platform, eliminating scheduling conflicts and reducing time-to-hire.</p>
          </div>
        </div>
        <div className='box'>
          <LandingPageLockIcon/>
          <div className='title'>
            <span>Customized Question Generation</span>
          </div>
          <div className='description'>
            <p>Tailored questions for each candidate based on their profile, ensuring a personalized interview experience.</p>
          </div>
        </div>
        <div className='box'>
          <LandingPageAiProctoring/>
          <div className='title'>
            <span>AI Proctoring</span>
          </div>
          <div className='description'>
            <p>Ethical testing ensured through 100% AI proctoring, maintaining integrity throughout the evaluation process.</p>
          </div>
        </div>
        <div className='box'>
          <LeafIcon/>
          <div className='title'>
            <span>Evaluation Tools:</span>
          </div>
          <div className='description'>
            <p>Objective assessment of skills and suitability, providing comprehensive insights into candidate capabilities.</p>
          </div>
        </div>
        <div className='box'>
          <LandingPageSeamless/>
          <div className='title'>
            <span>Seamless Integration</span>
          </div>
          <div className='description'>
            <p>Intuitive platform designed for ease of use, compatible with existing HR systems for effortless adoption.</p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
export default ExperienceTheFeature;
