import './link.css';

function Link(props:{
	url:string
	text:string
}) {
  return (
    <a href={props.url}>{props.text}</a>
  )
}

export default Link;