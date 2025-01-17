import './UserBlock.css';

function UserBlock(props:{
	name:String
	,location:String
	,tagline:String
}) {
  return (
    <div className='user-block'>
		<p className='text-preset-1'>{props.name}</p>
		<p className='text-preset-2__bold'>{props.location}</p>
		<p className='text-preset-2'>{props.tagline}</p>
    </div>
  )
}

export default UserBlock;
