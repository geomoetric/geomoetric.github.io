import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from "gatsby-image" // to take image data and render it

import SEO from '../components/seo';
import "../styles/global.css";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.allResumeXml.nodes[0].xmlChildren[1].content;
  const bio = data.allResumeXml.nodes[1].content;
  const email = data.allResumeXml.nodes[14].xmlChildren[0].content;
  const dribbble = data.allResumeXml.nodes[14].xmlChildren[1].content;
  const insta = data.allResumeXml.nodes[14].xmlChildren[3].content;
  const linkedin = data.allResumeXml.nodes[14].xmlChildren[2].content;

  return (
    <div className="grid">
      <SEO title="Portfolio" />

        <div className="div1">
          <h1>{siteTitle}</h1>
        </div>

        <div className="header"></div>

        <div className="div3">
          <p>
            {bio}
          </p>
        </div>
      
        <div className="div4">
          <Img fluid={data.file.childImageSharp.fluid} alt="A test image" />
        </div>

        <div className="footer"></div>

        <div className="div5">
          <span>Resume</span>
        </div>
        <div className="div6">
          <span><a href="https://dribbble.com/geomoetric/about">@geomoetric</a><br /></span>
          <span><a href={email}>moe@ericmoe.co</a><br /></span>
          <span><a href="https://www.austintexas.org/">Austin, Texas</a><br /></span>
        </div>
        <div className="div7">
          <span><a href={insta}>Instagram</a><br /></span>
          <span><a href={dribbble}>Dribbble</a><br /></span>
          <span><a href={linkedin}>Linkedin</a><br /></span>
        </div>
        <div className="div8">
          <span>Design, words, & code by Eric Moe.<br /></span>
          <span>Custom site built with <a href="https://www.gatsbyjs.com/">Gatsby.js</a>.<br /></span>
          <span>Copyright {new Date().getFullYear()}.</span>
        </div>

    </div>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    allResumeXml {
      nodes {
        name
        content
        xmlChildren {
          name
          content
          children {
            name
            content
          }
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
    file(relativePath: { eq: "test.png" }) {
      childImageSharp {
        fluid {
          base64
          aspectRatio
          src
          srcSet
          sizes
        }
      }
    }
  }
`;
