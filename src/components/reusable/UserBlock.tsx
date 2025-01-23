import './UserBlock.css';

function UserBlock(props:{
	portraitUrl:string
	,name:string
	,location:string
	,tagline:string
}) {
  return (
    <div className='user-block'>
		<img src={props.portraitUrl} alt={props.name + "-portrait"}/>
		<p className='text-preset-1'>{props.name}</p>
		<p className='text-preset-2__bold'>{props.location}</p>
		<p className='text-preset-2'>{props.tagline}</p>
    </div>
  )
}

export default UserBlock;
