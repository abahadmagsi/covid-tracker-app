import Navbar from "./Navbar";
import Logo from "./Logo";
import GlobalScreen from "./GlobalScreen";
import CountryScreen from "./CountryScreen";
import GraphScreen from "./GraphScreen";
import FootNav from "./FootNav";
import DateComponent from "./DateComponent";
export default function MainScreen({ currentScreen }) {
  return (
    <div>
      <Navbar />
      <div style={{ marginBottom: 100, textAlign: "center", padding: 10 }}>
        <Logo />
        <DateComponent />
        {currentScreen[0] === 0 ? (
          <GlobalScreen currentScreen={currentScreen[0]} />
        ) : currentScreen[0] === 1 ? (
          <CountryScreen />
        ) : (
          <GraphScreen />
        )}
      </div>
      <FootNav screenConfig={currentScreen} />
    </div>
  );
}
