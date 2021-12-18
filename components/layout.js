import HeroSection from "./hero-section";
import NavBar from "./NavBar";

export default function Layout({ children }) {
    return (
      <>
        <NavBar />
        <main>{children}</main>
        {/* <Footer /> */}
      </>
    )
  }