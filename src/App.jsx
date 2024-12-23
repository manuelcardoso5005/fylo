import "./App.css";
import logoImg from "../public/logo.svg";
import iconFolder from "../public/icon-folder.svg";
import iconUpload from "../public/icon-upload.svg";
import iconDocument from "../public/icon-document.svg";
import ImgLogo from "./assets/components/ImgLogo/ImgLogo";

function App() {
  return (
    <div id="container">
      <section className="left_side section-area">
        <img src={logoImg} alt="Logotipo" />
        <div className="image_container">
          <ImgLogo url_img={iconDocument} alt="Document" />
          <ImgLogo url_img={iconFolder} alt="Folder" />
          <ImgLogo url_img={iconUpload} alt="Upload" />
        </div>
      </section>
      <section className="right_side section-area">
        <p> You’ve used 815 GB of your storage</p>
        <div className="progress_bar">
          <div className="progress_bar_clr">
            <div className="progress_bar_btn"></div>
          </div>
        </div>
        <div className="progress_bar_legend">
          <p>0 GB</p>
          <p>1000 GB</p>
        </div>
        <div className="show_space">
          <p>185</p>
          <p>Gb left</p>
        </div>
      </section>
    </div>
  );
}

export default App;
