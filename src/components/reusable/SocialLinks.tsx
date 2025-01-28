import "./SocialLinks.css";
import LinkCustom from "./LinkCustom.tsx";

function SocialLinks(
	props: { 
		links: 
			{ site: string; url: string }[]
	}) {
  return (
    <div className="socials">
      {props.links.map((k) => (
        <LinkCustom url={k.url} text={k.site} />
      ))}
    </div>
  );
}

export default SocialLinks;
