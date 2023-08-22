import styles from "./FileUpload.module.css"
import Dropzone from "dropzone"
export default function FileUpload(){
    
    return (
        <div className={styles.fileUploadContainer}>
            <input type={"file"}/>
            <div id={styles.dropZone}>Drop your files here</div>
        </div>
    )
}