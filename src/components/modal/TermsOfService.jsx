import React from 'react'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import './termsOfService.css';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    }

  };


const TermsOfService = () => {

        let subtitle;
        const [modalIsOpen, setIsOpen] = React.useState(false);
      
        function openModal() {
          setIsOpen(true);
        }
      
        function afterOpenModal() {
          // references are now sync'd and can be accessed.
          subtitle.style.color = 'var(--color-primary)';
        }
      
        function closeModal() {
          setIsOpen(false);
        }



  return (
    <>

    <button className="footer-button" onClick={openModal}>Terms of Service</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Terms of Service</h2>
        <p style={{maxWidth: '44ch'}}>By purchasing a ticket, you agree to the following terms of service:</p>
        <ul>
            <li style={{maxWidth: '44ch'}}>UFO Adventures is not responsible for any injuries or death that may occur during your abduction.</li>
            <li>No refunds and no guarantee you will come back alive.</li>
            </ul>

        <button className="primary_button"
        style={{
            appearance: 'button',
            backfaceVisibility: 'hidden',
            backgroundColor: 'var(--color-button-background-primary-normal)',
            borderRadius: 'var(--size-border-radius-medium)',
            color: 'var(--color-button-text-primary-normal)',
            cursor: 'pointer',
            fontFamily: 'var(--font-family-body)',
            overflow: 'hidden',
            padding: 'var(--spacing-x-sm) var(--spacing-x-sm)',
            textAlign: 'center',
            transform: 'translateZ(0)',
            transition: 'all .2s,box-shadow .08s ease-in',
            width: 'fit-content',
            border: '1px solid var(--color-button-background-primary-normal)',
            fontSize: 'var(--font-size-body)',
            userSelect: 'none',
            touchAction: 'manipulation'
        }}
        
        onClick={closeModal}>close</button>
      </Modal>

    
    
    
    
    
    </>
  )
}

export default TermsOfService