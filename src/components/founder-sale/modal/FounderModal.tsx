import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import styled from 'styled-components';
import { FounderModalContent } from './FounderModalContent';

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}

export const FounderModal = ({ isOpen, handleClose }: Props) => (
  <div>
    <Modal
      open={isOpen}
      onClose={(event, reason) => { if (reason !== 'backdropClick') handleClose(); }}
      closeAfterTransition
      sx={{
        '.MuiBackdrop-root': {
          backdropFilter: 'blur(4px)'
        }
      }}
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={isOpen}>
        <Container>
          <FounderModalContent />
          <CloseButton onClick={handleClose}>X</CloseButton>
        </Container>
      </Fade>
    </Modal>
  </div>
);

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 861px;
  height: 70%;
  min-height: 690px;
  overflow: auto;
  background-color: white;
  border: 1px solid #000;
  box-shadow: 24;
  padding: 16px;
  outline: none;
  border-radius: 24px;

       @media (max-width: 1900px) and (max-height: 1037px) {
        height: 90%;
    }

      @media (min-height: 1037px) {
        height: 70%;
    }

      @media (min-height: 1400px) {
        height: 40%;
    }

       @media (max-width: 860px) {
        max-width: 100%;
    }
    `;

const CloseButton = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  border-radius: 100%;
  border: none;
  outline: none;
  background-color: rgba(255,255,255,0.2);
  color: white;
  font-size: 18px;
  z-index: 10;
  cursor: pointer;
  backdrop-filter: blur(8px);

       @media (max-width: 860px) {
        width: 40px;
        height: 40px;
    }
`;
