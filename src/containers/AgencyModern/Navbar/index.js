import React from 'react';
import Logo from 'common/components/UIElements/Logo';
import Container from 'common/components/UI/ContainerTwo';
import NavbarWrapper from './navbar.style';
import logo from 'common/assets/image/hostingModern/logo.png';
import { NAME } from 'lib/constant';

const Navbar = () => {
  return (
    <NavbarWrapper className="agencyModern-navbar navbar">
      <Container>
        <Logo
          href="/"
          logoSrc={logo}
          title={NAME}
          className="main-logo"
        />
        {/* end of logo */}
      </Container>

      {/* start mobile menu */}
      {/* <MobileMenu className={`mobile-menu ${mobileMenu ? 'active' : ''}`}>
        <Container>
          <Scrollspy
            className="menu"
            items={scrollItems}
            offset={-84}
            currentClassName="active"
          >
            {data.mobileMenuItems.map((menu, index) => (
              <li key={`menu_key${index}`}>
                <AnchorLink
                  href={menu.path}
                  offset={menu.offset}
                  onClick={handleHandleMenuClose}
                >
                  {menu.label}
                </AnchorLink>
              </li>
            ))}
          </Scrollspy>
        </Container>
      </MobileMenu> */}
      {/* end of mobile menu */}
    </NavbarWrapper>
  );
};

export default Navbar;
