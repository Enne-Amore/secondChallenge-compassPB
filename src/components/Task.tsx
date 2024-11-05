import { IoChatbubbleEllipsesSharp } from 'react-icons/io5'
import imgProfile from '../assets/profile-img-1.png'
import { FaCircleCheck } from 'react-icons/fa6'

export const Task = () => {
  return (
    <article className='bg-white rounded-3xl shadow-sm p-4'>
      <strong className=''>mid</strong>

      <h3 className=''>Task 3</h3>

      <div className=''>
        <div>
          <label htmlFor="progress">Progress</label>

          <span>15%</span>
        </div>

        <input type="range" name="progress" id="progress" />
      </div>

      <div className=''>
        <ul className=''>
          <figure className='w-3 h-3'>
              <img src={imgProfile} alt="Profile image" className="w-full h-full rounded-full" />
          </figure>
            
          <figure className='w-3 h-3'>
              <img src={imgProfile} alt="Profile image" className="w-full h-full rounded-full" />
          </figure>
        </ul>

        <div className=''>
          <div className=''>
            <IoChatbubbleEllipsesSharp className='' />

            <span className=''>987</span>
          </div>

          <div className=''>
            <FaCircleCheck className='' />

            <span className=''>210</span>
          </div>
        </div>
      </div>
    </article>
  )
}
