import './UserCard.css';

import UserBlock from './UserBlock';
import SocialLinks from './SocialLinks.tsx';
import aaron from '../../assets/images/avatar-aaron.jpeg';

function UserCard() {
  return (
    <div className='user-card'>
		<UserBlock 
			portraitUrl= {aaron}
			name='Aaron Deimund'
			location='Warrenton, Missouri'
			tagline='"Full-stack developer and avid TTRPG fan."'
		/>
		<SocialLinks/>

    </div>
  )
}

export default UserCard;