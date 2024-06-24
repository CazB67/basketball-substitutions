import styles from "./BackArrowIcon.module.css";
interface BackArrowIconProps {
  onClick: () => void;
}

const BackArrowIcon: React.FC<BackArrowIconProps> = ({ onClick }) => {
  return (
    <svg  className={styles.icon}
    onClick={onClick} height="512px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="512px" xmlns="http://www.w3.org/2000/svg"><polygon points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 "/></svg>
  );
}

export default BackArrowIcon;