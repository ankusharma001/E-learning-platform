import Styles from "./container.module.css";

const Container = (props)=>
{
  return <div className={Styles.container}>{props.children}</div>
}
export default Container