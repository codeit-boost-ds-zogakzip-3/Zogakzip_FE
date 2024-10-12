import styled from "styled-components";
import color from "../../util/Color";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const ModalContent = styled.div`
  position: relative;
  width: 480px;
  max-height: 879px;
  background-color: ${color.gray50};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  }
`;

export const CloseImg = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: ${color.black};
`;

export const SubTitle = styled.div`
  font-size: 14px;
  color: ${color.black};
`;
