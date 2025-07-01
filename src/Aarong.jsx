import "./App.css";
import "./Aarong.css";
export default function DressBrand({ name, lowestPrice, highestPrice }) {
  return (
    <div className="dress-brand">
      <h1>Dress Brand</h1>
      <p className="aarong-title">
        This is a popular lifestyle brand in Bangladesh, known for its
        traditional and contemporary designs.
      </p>
      <p>
        This Brand name is : <span className="aarong">{name}</span>
      </p>
      <p>Lowest Price Start From :{lowestPrice}</p>
      <p>Highest Price Start From :{highestPrice}</p>
    </div>
  );
}
