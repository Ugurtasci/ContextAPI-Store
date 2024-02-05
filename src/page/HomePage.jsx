import Loader from "../components/Loader";
import Card from "../components/Card";

// 1) useContext hook'u bir context yapısına abone olmamızız sağlar
import { useContext } from "react";

// 2) Abone olmak istediğimiz context'i çağırır
import { ProductContext } from "../context/productContext";

const HomePage = () => {
  // Context yapısında tutulan bir veriye projedeki
  // bileşenler içerinde erişmek istiyorsak bileşenden
  // ilgili context yapısına abone oluruz.
  const { products, category } = useContext(ProductContext);

  return (
    <div className="container">
      <h2 className="my-4">{category && category}</h2>

      <div className="d-flex flex-wrap justify-content-center justify-content-md-between gap-3 gap-md-4 my-5">
        {/* Veriler gelmediyse yükleniyor bas */}
        {!products && <Loader />}

        {/* Veriler geldiyse her biri için kart bas */}

        {products?.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
