import './UserCard.css';

import UserBlock from './UserBlock.tsx';
import SocialLinks from './SocialLinks.tsx';

import * as data from '../../assets/aaronDeimund_data.json'

function UserCard() {
  return (
    <div className='user-card'>
		<UserBlock 
			portraitUrl=  {data.portraitUrl}
			name={`${data.firstName} ${data.lastName}`}
			location={`${data.city}, ${data.stateCd}. ${data.countryCd}`}
			tagline={`"${data.tagLine}"`}
		/>
		<SocialLinks links={data.links}/>

    </div>
  )
}

export default UserCard;