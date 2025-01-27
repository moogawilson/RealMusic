import styles from "./randomBox.module.css";
import LineGraph from "./viewData";
import Potential from "./potential";

const RandomBox: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>RealMusic beta release</h1>
      <div className={styles.descriptions}>
        <h1 className={styles.description}>
          The latest indie music updated on the hour.
        </h1>
        <div className={styles.howItWorks}>
          <h1 className={styles.howItWorksHeading}>How it works</h1>
          <h1 className={styles.howItWorksDescription}>
            RealMusic scrapes songs published to youtube by distrubuters such as
            DistorKid and CDBaby. Distribution services are what indie artists
            use to get their music on platforms such as spotify and apple music.
            RealMusic pulls these songs from YouTube every hour, and gives users
            access to raw and unfiltered Real Music.
          </h1>
        </div>
        <h1 className={styles.moreInfo}>
          for more information view the GitHub Repository
        </h1>
      </div>
      {/* <div className={styles.charts}>
        <div className={styles.views}>
          <LineGraph />
        </div>
        <div className={styles.potential}>
          <Potential />
        </div>
      </div> */}
    </div>
  );
};

export default RandomBox;
