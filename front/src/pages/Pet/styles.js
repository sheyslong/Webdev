import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1020px;
    margin: 0 auto 200px;
`;

export const Panel = styled.div`
    margin-top: 30px;
    background: #fff;
    display: grid;
    grid-template-columns: 65fr 35fr;
    border: 1px solid #7a77ff;
    border-radius: 5px;
`;

export const Column = styled.div`
    &:first-child {
        border-right: 1px solid #7a77ff;
    }
`;

export const Gallery = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 530px;
    > img {
        height: 73%;
    }
`;

export const Comments = styled.div`
    margin-top: 30px;
    border-top: 1px solid #7a77ff;
    display: flex;
    flex-direction: column;

    > h1 {
        margin-top: 30px;
    }

    > textarea {
        border: 1px dashed #7a77ff;
        border-radius: 5px;
        padding: 10px 30px;
        width: 100%;
        margin: 20px auto 0;
        font-size: 20px;
    }

    > button {
        padding: 20px 30px;
        background: linear-gradient(45deg, #7a77ff, #310dff);
        color: #fff;
        margin-top: 10px;
        border-radius: 10px;
        align-self: flex-end;
        font-size: 20px;
        max-width: 170px;
    }
`;

export const Dados = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 10px 0px;
  span {
    align-self: flex-end;
    padding: 10px;
    font-weight: 900;
  }
  h2 {
    font-size: 35px;
  }
  h3 {
    color: #C1BEAF;
    padding-top: 20px;
    font-size: 20px;
  }
  p {
    font-size: 25px;
    line-height: 26.5px;
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
  }

  a {
    padding: 10px 30px;
    background-color: #00E676;
    color: #FFF;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 10px;
    font-size: 17px;
    max-width: 300px;
    align-self: center;

    svg{
      font-size: 30px;
      color: #FFF;
    }
  }

  .dxc {
    font-size: 25px;
    margin: 20px auto;
  }
  svg {
    font-size: 40px;
    align-self: center;
  }
`;

export const Comment = styled.div`
  display: flex;
  margin-top: 20px;
  position: relative;


  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background: linear-gradient(45deg, #7a77ff, #310dff);

    span {
      font-size: 27px;
      color: #FFF;
    }
  }


  .comment {
    margin-left: 5px;
    padding: 10px 30px;
    border: 1px solid #310dff;
    border-radius: 0px 20px 20px 20px;
    background-color: #FFF;


    p {
      margin-top: 10px;
      font-size: 19px;
    }

    .actions {
      float: right;

      svg {
        font-size: 22px;
        margin-left: 10px;
      }
    }
  }
`;
