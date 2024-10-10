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
  width: 60%;
  height: 70%;
  background-color: white;
  border: 1px solid #000;
  box-shadow: 24;
  padding: 16px;
  outline: none;
  border-radius: 24px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  border-radius: 100%;
  border: none;
  outline: none;
  background-color: rgba(0,0,0,0.3);
  color: white;
  backdrop-filter: blur(1px);
  font-size: 18px;
  z-index: 10;
  cursor: pointer;
`;
