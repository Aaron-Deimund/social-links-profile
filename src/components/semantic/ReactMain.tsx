import './ReactMain.css';

import '../reusable/UserBlock';
import UserBlock from '../reusable/UserBlock';

function ReactMain() {
  return (
    <main>
		<UserBlock 
			name={"Aaron Deimund"} 
			location={"Warrenton, Missouri"}
			tagline={"Full-stack developer and avid TTRPG fan."}
		/>
		
		
			  
		GitHub
		Frontend Mentor
		LinkedIn
		BlueSky
    </main>
  )
}

export default ReactMain;
