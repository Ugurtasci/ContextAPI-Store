import { useLocalStorage } from "@uidotdev/usehooks";
import { createContext } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

// 1) Contex yapısı tanımlama için
export const BasketContext = createContext();

// 2) contexxt'te tutulan verileri uygulamaya aktarılacak bir sağlayıcı tanımlamak için

export function BasketProvider({ children }) {
  const [basket, setBasket] = useLocalStorage("basket", []);

  // sepete ürün eklemek için
  const addToBasket = (newProduct) => {
    // 1) bu üründen sepette var mı kontrol etmek için
    const found = basket.find((i) => i.id === newProduct.id);

    if (found) {
      // 2) ürün sepette varsa miktarını 1 artır
      // a) ürünün miktarını 1 artırmak için
      const updated = { ...found, amount: found.amount + 1 };

      // b) sepet dizisindeki eski ürünün yerine güncel halini koymak için
      const newBasket = basket.map((item) =>
        item.id === updated.id ? updated : item
      );
      // c) state'i güncelle
      setBasket(newBasket);

      toast.info(`Ürünün miktarı artırıldı(${updated.amount})`);
    } else {
      // 3) ürün sepet yoksa ürünü sepete ekle
      setBasket([...basket, { ...newProduct, amount: 1 }]);

      toast.success("Ürün sepete eklendi");
    }
    //console.log(basket);
  };

  // sepetten ürün kaldırmak için
  const removeFromBasket = (delete_id) => {
    // sepetteki ürünü bul
    const found = basket.find((i) => i.id === delete_id);

    if (found.amount > 1) {
      // miktarı 1 den fasla ise > 1 azalt
      const updated = { ...found, amount: found.amount - 1 };

      const newBaske = basket.map((i) => (i.id === updated.id ? updated : i));
      setBasket(newBaske);
      toast.info(`Ürünün miktarı azaltıldı (${updated.amount})`);
    } else {
      // miktarı 1'e eşitse > ürünü diziden kaldır
      const filtered = basket.filter((i) => i.id !== delete_id);
      setBasket(filtered);

      toast.error(`Ürün sepetten kaldırıldı`);
    }
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket }}>
      {children}
    </BasketContext.Provider>
  );
}
