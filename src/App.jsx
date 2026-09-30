import CardProtectorSolar from "./components/CardProtectorSolar";

function App() {
  return (
    <div className="min-h-screen bg-[#FFF4BF] flex items-center justify-center p-8">
      <CardProtectorSolar
        imgUrl="/protector-solar.png"
        nombre="Protector Solar Daily Airfit VV BETTER"
        precio="443.54"
      />
    </div>
  );
}

export default App;