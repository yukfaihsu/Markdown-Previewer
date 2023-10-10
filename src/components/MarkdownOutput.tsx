import styled from 'styled-components';
import Markdown from 'react-markdown';

const OutputContainer = styled.div`
  background-color: rgb(244, 244, 244);;
  border-left: 1px solid rgb(211, 211, 211);
  padding: 30px;
  height: 90vh;
  width: 50%;
`;

type MarkdownOutputProps = {
  markdown: string;
}

const MarkdownOutput = ({markdown}: MarkdownOutputProps) => {
  return (
    <OutputContainer>
      <Markdown>{markdown}</Markdown>
    </OutputContainer>
  )
};

export default MarkdownOutput;