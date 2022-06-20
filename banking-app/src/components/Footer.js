import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FooterContainer, FooterLink, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, SocialMedia, SocialIconLink, SocialIcons, SocialLogo, SocialMediaWrap, WebsiteRights } from './FooterElements';

const Footer = () => {

  const toggleHome = () => {
    scroll.scrollToTop();
}

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>
                About Us
              </FooterLinkTitle>
                <FooterLink to='/'>How it Works</FooterLink>
                <FooterLink to='/'>Testimonials</FooterLink>
                <FooterLink to='/'>Careers</FooterLink>
                <FooterLink to='/'>Investors</FooterLink>
                <FooterLink to='/'>Terms of Service</FooterLink>
             </FooterLinkItems>
             <FooterLinkItems>
              <FooterLinkTitle>
                Contact Us
              </FooterLinkTitle>
                <FooterLink to='/'>Contact</FooterLink>
                <FooterLink to='/'>Support</FooterLink>
                <FooterLink to='/'>Destinations</FooterLink>
                <FooterLink to='/'>Sponsorships</FooterLink>
             </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>
                Videos
              </FooterLinkTitle>
                <FooterLink to='/'>Submit Video</FooterLink>
                <FooterLink to='/'>Ambassadors</FooterLink>
                <FooterLink to='/'>Agency</FooterLink>
                <FooterLink to='/'>Influencer</FooterLink>
             </FooterLinkItems>
             <FooterLinkItems>
              <FooterLinkTitle>
                Social Media
              </FooterLinkTitle>
                <FooterLink to='/'>Instagram</FooterLink>
                <FooterLink to='/'>Facebook</FooterLink>
                <FooterLink to='/'>Youtube</FooterLink>
                <FooterLink to='/'>Twitter</FooterLink>
             </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>Dolla</SocialLogo>
            <WebsiteRights>dolla {new Date().getFullYear()}</WebsiteRights>
            <SocialIcons>
            <SocialIconLink href='/' target='_blank' aria-label='Instagram'><FaInstagram /></SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Facebook'><FaFacebook /></SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Youtube'><FaYoutube /></SocialIconLink>
              <SocialIconLink href='/www.twitter.com/' target='_blank' aria-label='Twitter'><FaTwitter /></SocialIconLink>
              </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
  </FooterContainer>
  )
}

export default Footer;