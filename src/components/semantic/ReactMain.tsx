import './ReactMain.css';
import '../reusable/UserBlock';
import UserBlock from '../reusable/UserBlock';
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
    </main>
  )
}

export default ReactMain;
