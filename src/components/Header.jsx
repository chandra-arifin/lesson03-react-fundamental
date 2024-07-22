import SocialButton from "./SocialButton";

function Header() {
  const socialMedia = [
    {
      icon: "fab fa-facebook",
      href: "https://www.facebook.com",
    },
    {
      icon: "fab fa-twitter",
      href: "https://www.twitter.com",
    },
    {
      icon: "fab fa-instagram",
      href: "https://www.instagram.com",
    },
    {
      icon: "fab fa-linkedin",
      href: "https://www.linkedin.com",
    },
    {
      icon: "fab fa-github",
      href: "https://www.github.com",
    },
  ];

  const socialMiddle = Math.floor(socialMedia.length / 2) + 1;
  const socialLeft = socialMedia.slice(0, socialMiddle);
  const socialRight = socialMedia.slice(socialMiddle);

  return (
    <>
      <div className="social-buttons">
        {socialLeft.map((item, index) => (
          <SocialButton icon={item.icon} key={index} link={item.href} />
        ))}
      </div>
      <div className="social-buttons right">
        {socialRight.map((item, index) => (
          <SocialButton icon={item.icon} link={item.href} />
        ))}
      </div>
    </>
  );
}

export default Header;
