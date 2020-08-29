/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import SEO from "./seo";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen min-w-screen bg-gold-100 overflow-y-scroll scrolling-touch py-16">
      <SEO title="Demo Site" />
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
