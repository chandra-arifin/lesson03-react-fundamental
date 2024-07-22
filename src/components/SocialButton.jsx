function SocialButton({ icon, link }) {
  return (
    <button onClick={() => window.open(link, "_blank")}>
      <i className={icon}></i>
    </button>
  );
}

export default SocialButton;
