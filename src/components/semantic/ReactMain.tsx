import './ReactMain.css';

import UserBlock from '../reusable/UserBlock';
import SocialLinks from '../reusable/SocialLinks';
import aaron from '../../assets/images/avatar-aaron.jpeg';

function ReactMain() {
  return (
    <main>
		<UserBlock 
			portraitUrl= {aaron}
			name="Aaron Deimund"
			location="Warrenton, Missouri"
			tagline="Full-stack developer and avid TTRPG fan."
		/>
		<SocialLinks/>

    </main>
  )
}

export default ReactMain;
