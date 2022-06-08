import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from "gatsby-image" // to take image data and render it
import SEO from '../components/seo';
import Album from '../components/album';
import "../styles/global.css";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.allResumeXml.nodes[0].xmlChildren[1].content;
  const bio = data.allResumeXml.nodes[1].content;
  const email = data.allResumeXml.nodes[14].xmlChildren[0].content;
  const phone = data.allResumeXml.nodes[4].xmlChildren[3].content;
  const dribbble = data.allResumeXml.nodes[14].xmlChildren[1].content;
  const insta = data.allResumeXml.nodes[14].xmlChildren[3].content;
  const linkedin = data.allResumeXml.nodes[14].xmlChildren[2].content;

  return (
    <div className="grid">
      <SEO title="Portfolio" />

        <div className="div1">
          <h1 className="mybrand">{siteTitle}</h1>
        </div>

        <div className="header"></div>

        <div className="div3 small">
        <p>Eric Moe is a designer with several years of experience working in digital design, event production, and brand strategy.</p>
        <p>Born and raised in Austin, Eric combines classic craft with modern-day technologies.</p>
        </div>
     
       <Album /> 
        

        <div className="footer"></div>

        <div className="div5">
          <span>Based in <a href="https://www.google.com/maps?hl=en&q=30.263430,+-97.769741">Austin, Texas</a>.</span>
        </div>
        <div className="div6">
          <span><a href="https://dribbble.com/geomoetric/about">@geomoetric</a><br /></span>
          <span><a href={email}>moe@ericmoe.co</a><br /></span>
          <span><a href={phone}>512.766.5922</a></span>
        </div>
        <div className="div7">
          <span><a href={linkedin}>LinkedIn</a><br /></span>
          <span><a href={insta}>Instagram</a><br /></span>
          <span><a href={dribbble}>Dribbble</a><br /></span>
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
    file(relativePath: { eq: "crawl.jpg" }) {
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
