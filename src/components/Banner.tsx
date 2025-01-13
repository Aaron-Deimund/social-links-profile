import styles from "./Banner.module.css";

const Banner = (props:{headerText:string}) =>{
    return(
        <h1 className={styles.header}>{props.headerText}</h1>
    );
}

export default Banner;