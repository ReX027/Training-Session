import imageOfExperience from '../../assets/images/Product Image.png'
import LeafIcon from '../../assets/icons/LeafIcon'
import LandingPageLockIcon from '../../assets/icons/LandingPageLockIcon';
import LandingPageAiProctoring from '../../assets/icons/LandingPageAiProctoring';
import LandingPageSeamless  from '../../assets/icons/LandingPageSeamless';


import './ExperienceTheFeature.scss'


function ExperienceTheFeature() {
  return (
    <>
    {/* <section className="experience_feature">
      <div className="heading">
        <h4>Experience the Future of Hiring</h4>
        <span>Watch our introductory video to see how Rework AI revolutionizes the recruitment process</span>
      </div>
      <div className='image'>
        <img src={imageOfExperience} alt=''/>
      </div>
    </section> */}
    <section className='solution_page_discover_power'>
      <div className='heading'>
        <h4>Tailored Solutions for Startup Success</h4>
      </div>
      <div className='box_list'>
        <div className='box'>
          <LeafIcon/>
          <div className='title'>
            <span>Customized Question Generation</span>
          </div>
          <div className='description'>
            <p>Personalized interview questions tailored to fit your startup’s unique needs and culture, ensuring the right fit for your team.</p>
          </div>
        </div>
        <div className='box'>
          <LandingPageAiProctoring/>
          <div className='title'>
            <span>AI Video Interviewing</span>
          </div>
          <div className='description'>
            <p>Streamline your hiring process with AI-powered video interviews, saving time and resources while providing a more engaging candidate experience.</p>
          </div>
        </div>
        <div className='box'>
          <LandingPageLockIcon/>
          <div className='title'>
            <span>Scalable Solutions</span>
          </div>
          <div className='description'>
            <p>Flexible plans and pricing options designed to grow with your startup, allowing you to scale your hiring efforts as your business expands.</p>
          </div>
        </div>
        <div className='box'>
          <LandingPageSeamless/>
          <div className='title'>
            <span>Dedicated Support </span>
          </div>
          <div className='description'>
            <p>Access to our team of experts to guide you through every step of the hiring journey, from onboarding to ongoing support and optimization.</p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
export default ExperienceTheFeature;
