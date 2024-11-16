import "./ImgLogo.css";

export default function ImgLogo({ url_img, alt_img }) {
  return (
    <div className="img_single">
      <img src={url_img} alt={alt_img} />
    </div>
  );
}
