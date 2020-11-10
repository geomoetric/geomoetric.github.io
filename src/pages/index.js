import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from "gatsby-image" // to take image data and render it

// import Layout from '../components/layout';
import SEO from '../components/seo';
import "../styles/global.css";
// import { rhythm } from '../utils/typography';

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.allResumeXml.nodes[0].xmlChildren[1].content;
  const bio = data.allResumeXml.nodes[1].content;
  const email =data.allResumeXml.nodes[14].xmlChildren[0].content;
  const dribbble =data.allResumeXml.nodes[14].xmlChildren[1].content;
  const insta =data.allResumeXml.nodes[14].xmlChildren[3].content;

  return (
    <div className="grid">
      <SEO title="Portfolio" />

        <div className="div1">
          <h1>{siteTitle}</h1>
        </div>
        <div className="div2">
          <h1>
            <a>Info</a>
          </h1>
        </div>

      <div className="div3">
        <p>
          {bio}
        </p>
      </div>
      
      <div className="div4">
        <Img fluid={data.file.childImageSharp.fluid} alt="A test image" />
      </div>

        <div className="div5">
          <h1>
            <a href={email}>Email</a>
          </h1>
        </div>
        <div className="div6">
          <h1>
            <a href={dribbble}>Dribbble</a>
          </h1>
        </div>
        <div className="div7">
          <h1>
            <a href={insta}>Instagram</a>
          </h1>
        </div>
        <div className="div8">
          <span>Design, words, & code by Eric Moe.<br /></span>
          <span>Custom site built with <a href="https://www.gatsbyjs.com/">Gatsby.js</a>.<br /></span>
          <span>Made deep in the heart of Texas .<br /></span>
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
