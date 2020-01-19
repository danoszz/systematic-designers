import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import IOExample from 'components/io-example';
import Modal from 'containers/modal';
import { graphql } from 'gatsby';

/* TODO: make modal based on JSON data from each gallery item */

const Index = ({ data }) => (
  <Layout>
    <Box>
      {/* <Title as="h2" size="large">
        {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title> */}
      <Modal>
        <article className="modal--text">
          <header>
            <h2>Design Systems</h2>
          </header>
          <main>
            <p>
              A Design System is a process for digital teams, creating digital
              products, that is based on using a central library of components.
              A Design Systems consists out of three pilars:
            </p>
          </main>
        </article>
      </Modal>
    </Box>
    <Gallery items={data.homeJson.gallery} />
    {/* <IOExample /> */}
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        imageInActive {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        imageActive {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
