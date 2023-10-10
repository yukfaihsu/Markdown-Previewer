import styled from 'styled-components';

const GuideContainer = styled.div`
  background-color: rgb(229, 229, 229);
  padding: 20px;
  margin: 20px;
`;

const Title = styled.h2`
  color: black;
  font-size: 23px;
`;

const ListItem = styled.li`
  font-weight: 500;
  color: black;
`;

const MarkdownGuide = () => {
  return (
    <GuideContainer>
      <Title>Markdown Guide</Title>
      <ul>
        <ListItem> 
          # H1
        </ListItem>
        <ListItem> 
          ## H2
        </ListItem>
        <ListItem> 
          ### H3
        </ListItem>
        <ListItem> 
          **bold**
        </ListItem>
        <ListItem> 
          *italic*
        </ListItem>
        <ListItem> 
          [Link](http://a.com)
        </ListItem>
        <ListItem> 
          ![Image](http://url/a.png)
        </ListItem>
        <ListItem> 
          `inline code`
        </ListItem>
        <ListItem> 
          ```block code```
        </ListItem>
        <ListItem> 
          - list item
        </ListItem>
      </ul>
    </GuideContainer>
  )
};

export default MarkdownGuide;