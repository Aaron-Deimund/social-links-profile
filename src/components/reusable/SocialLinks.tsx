import './SocialLinks.css';
import LinkCustom from './LinkCustom.tsx';
import * as data from '../../assets/data.json'

function SocialLinks() {
  return (
	
    <div className='socials'>
		{data.links.map( (k) =>(
			<LinkCustom
				url={k.url}
				text = {k.site}
			/>
		))}
	</div>
  )
}

export default SocialLinks;
