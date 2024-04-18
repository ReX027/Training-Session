import imageOfExperience from '../../assets/images/Product Image.png'
import LeafIcon from '../../assets/icons/LeafIcon'


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
          <LeafIcon/>
          <div className='title'>
            <span>AI Video Interview</span>
          </div>
          <div className='description'>
            <p>Conduct interviews with our AI-powered platform, eliminating scheduling conflicts and reducing time-to-hire.</p>
          </div>
        </div>
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
          <LeafIcon/>
          <div className='title'>
            <span>AI Video Interview</span>
          </div>
          <div className='description'>
            <p>Conduct interviews with our AI-powered platform, eliminating scheduling conflicts and reducing time-to-hire.</p>
          </div>
        </div>
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
          <LeafIcon/>
          <div className='title'>
            <span>AI Video Interview</span>
          </div>
          <div className='description'>
            <p>Conduct interviews with our AI-powered platform, eliminating scheduling conflicts and reducing time-to-hire.</p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
export default ExperienceTheFeature;
