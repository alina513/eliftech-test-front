import Modal from 'react-modal';
import FormReg from '../Form/Form';
import { Wrapper } from './Modal.styled';

Modal.setAppElement('#modal');

export const ModalRegisration = ({
  event_id,
  isOpenModalRegistration,
  setIsOpenModalRegistration,
}) => {
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(30, 66, 89, 0.4)',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '40px',
      maxWidth: '566px',
      maxHeight: '600px',
      borderRadius: '30px',
    },
  };

  return (
    <>
      <Modal
        isOpen={isOpenModalRegistration}
        onRequestClose={() => {
          setIsOpenModalRegistration(false);
        }}
        style={customStyles}
        contentLabel="More info modal"
      >
        <Wrapper>
          <FormReg event_id={event_id} />
        </Wrapper>
      </Modal>
    </>
  );
};
