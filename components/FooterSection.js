import { useGlobalState } from "../state";

const FooterSection = ({ footerContent }) => {
  const [siteSettings] = useGlobalState("siteSettings");

  return (
    <div>
      <a href={siteSettings.pdf?.pdfFile} download target="_blank">
        <h4>{siteSettings.pdf?.pdfText}</h4>
      </a>
    </div>
  );
};

export default FooterSection;
