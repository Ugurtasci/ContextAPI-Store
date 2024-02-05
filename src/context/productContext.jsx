import axios from "axios";
import { createContext, useEffect, useState } from "react";

/* 
   * Context API
   * Uygulamada biden çok bileşenin ihtiyacı olan verilei
   * bişenlerden bağımsız bir şekilde konumlanan merkezlerde
   * yönetmeye yarar.
    
   * Context yapısı içerisinde verilerin state'ni ve verileri değiştirmeye
   * yarayn fonksiyonlar tutabilir.
    
   * Context, tuttuğumuz değişkenleri bileşenlere doğrudan aktarım yapabilen
   * merkezi state yönetim aracıdır.

*/

//! Context yapısının temelini oluşturma
export const ProductContext = createContext();

//! Sağlayıcı ve onun tutttuğu verileri tanımlama
export function ProductProvider({ children }) {
  const [products, setProducts] = useState(null);
  const [category, setCategory] = useState("Tüm Ürünler");

  useEffect(() => {
    // önceki ürünleri kaldır > yükleniyoru tetikler
    setProducts(null);
    // hangi url'ye istek atmak için
    const url =
      category === "Tüm Ürünler"
        ? "https://fakestoreapi.com/products"
        : `https://fakestoreapi.com/products/category/${category}`;

    // api isteği atmak için
    axios
      .get(url)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, [category]);

  //context yapısının tuttuğumuz verileri bileşenler sağlar
  // Valu olarak eklenen veriler prorojedeki bütün bileşenler
  // tarafından erişilebilir olur.
  return (
    <ProductContext.Provider value={{ products, category, setCategory }}>
      {children}
    </ProductContext.Provider>
  );
}
