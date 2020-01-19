import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 30px;
  padding: 0 30px;
  margin: 30px 0;

  ${MEDIA.TABLET`
    display: block;
    grid-template-columns: repeat(3, 1fr);

  `};
`;
