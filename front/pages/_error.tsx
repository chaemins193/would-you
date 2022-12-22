import { AnxiosIcon, HurtIcon, SadIcon } from "@components/icons/EmotionIcon";
import { Container, Wrapper } from "@styles/layout";
import Link from "next/link";
import { FallbackProps } from "react-error-boundary";
import styled from "styled-components";

const Error = ({ error }: FallbackProps) => {
  return (
    <Wrapper>
      <ErrorContainer>
        <ErrorImgBox>
          <AnxiosIcon height={90} />
          <SadIcon height={100} />
          <HurtIcon height={90} />
        </ErrorImgBox>
        <ErrorTextBox>
          <p>죄송합니다.</p>
          <p>현재 페이지에 문제가 발생하였습니다.</p>
          <p>다시 시도해 주세요.</p>
          <Link href="/">
            <Button>홈으로 가기</Button>
          </Link>
        </ErrorTextBox>
      </ErrorContainer>
    </Wrapper>
  );
};

const ErrorContainer = styled(Container)`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 90%;
  height: 88vh;
`;

const ErrorTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 3em;
  font-weight: 600;
  p {
    font-size: ${props => props.theme.fontSize.textLg};
  }
`;
const Button = styled.button`
  margin-top: 1.5em;
`;
const ErrorImgBox = styled(ErrorTextBox)`
  gap: 20px;
  @media screen and (max-width: 720px) {
    display: none;
  }
`;

export default Error;
