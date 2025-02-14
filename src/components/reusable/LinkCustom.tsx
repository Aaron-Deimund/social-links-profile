import "./linkCustom.css";

function linkCustom(props: { url: string; text: string }) {
	return (
		<a className="custom-link text-preset-2__bold" href={props.url}>
			{props.text}
		</a>
	);
}

export default linkCustom;
