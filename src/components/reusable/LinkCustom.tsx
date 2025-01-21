import './linkCustom.css';

function linkCustom(props:{
	url:string
	text:string
}) {
  return (
    <a href={props.url}>{props.text}</a>
  )
}

export default linkCustom;