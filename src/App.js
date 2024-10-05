import { useState } from 'react'

function App() {
  const [nestedObjected, setNestedObject] = useState({
    taxi: 'Ücret karşılığında yolcu taşımak için lisanslı bir araç',
    food: {
      sushi: 'Deniz ürünleri ve sebzelerle birlikte sunulan geleneksel bir Japon yemeği',
      apple: {
        Honeycrisp:
          "MAES Bahçe Araştırma Merkezi'nde geliştirilen bir elma çeşidi",
        Fuji: "Tohoku Araştırma İstasyonu'nda yetiştiriciler tarafından geliştirilen bir elma çeşidi",
      },
    },
  });

  return (
    <div style={{ margin: 'auto', width: '70%', paddingTop: 40 }}>
      <DisplayNested nestedObjected={nestedObjected} />
    </div>
  );
}

const DisplayNested = ({ nestedObjected }) => {
  return (
    <ul>
      {Object.entries(nestedObjected).map(([key, value]) => {
        return (
          <li key={key}>
            <strong>{key}</strong>: {typeof value === 'string' ? value : <DisplayNested nestedObjected={value} />}
          </li>
        );
      })}
    </ul>
  );
};

export default App;
