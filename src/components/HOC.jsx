import { useState } from "react";
import Modal from "./modal";

const HOC = () => {
  const [isOpen, setIsOpen] = useState(null);

  const close = () => {
    setIsOpen(false);
  };

  return (
    <div className="d-flex flex-column gap-5">
      <h1>Anasayfa</h1>

      <h1>Kategoriler</h1>

      <a href="/">Elektronik</a>
      <a href="/">Giyim</a>
      <a href="/">Teknoloji</a>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
        perferendis, quia excepturi sed itaque error laborum possimus
        voluptatibus est molestias minus impedit vel accusantium qui esse quam
        et? Ratione itaque rerum, quo, facere omnis eos est quam vero iste rem
        perspiciatis. Quibusdam, eveniet possimus reiciendis iusto hic vero
        alias harum!
      </p>

      <button onClick={() => setIsOpen("login")} className="btn btn-dark">
        Giriş Yap
      </button>
      <button onClick={() => setIsOpen("mod")} className="btn btn-dark">
        Koyu Mod
      </button>
      <button onClick={() => setIsOpen("warn")} className="btn btn-dark">
        Uyarı
      </button>

      {isOpen === "login" ? (
        <Modal close={close}>
          <form>
            <input type="text" />
            <input type="text" />
          </form>
        </Modal>
      ) : isOpen === "mod" ? (
        <Modal close={close}>
          <label>Koyu Mod</label>
          <input type="checkbox" />
        </Modal>
      ) : isOpen === "warn" ? (
        <Modal close={close}>
          <h3>Silmek istediğinizden emin misiniz?</h3>
        </Modal>
      ) : (
        ""
      )}

      {/* Normal Bileşen */}
      {/*<Modal />*/}

      {/* HOC Bileşen Kullanımı */}

      {/*  <Modal>
        <h2>silmek istediğinizden emin misiniz?</h2>
      </Modal>

      <Modal>
        <label htmlFor="">Şifre</label>
        <input type="text" />
      </Modal> */}
    </div>
  );
};

export default HOC;
