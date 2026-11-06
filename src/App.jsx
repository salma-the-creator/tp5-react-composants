import Welcome from   "./Welcome";
import ProfilCard from "./ProfilCard";
import ProductCard from "./ProductCard";
function App() {
  return (
    <>
     <h1>TP React</h1>
     <Welcome />
     <ProfilCard Name="salma" speciality="dev " description="salma amdouni l3 dev" /> 
     <ProductCard name="salma" price="100" description="salma amdouni l3 dev" image="../public/react.jpeg" />
    </>
  

  );
}

export default App;
