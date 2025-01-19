"use client";
import styles from "./navBar.module.css";
import { SignInButton } from "./googleSignin/GoogleSignIn";
import { GithubLink } from "./github/githubLink";

const NavBar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.signIn}>
        <SignInButton />
      </div>
      <div className={styles.githubContainer}>
        <GithubLink />
      </div>
      <div>
        <h1 className={styles.logo}>RealMusic</h1>
      </div>
    </div>
  );
};

export default NavBar;
