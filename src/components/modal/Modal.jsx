// import React from 'react'
import React, { useState } from 'react';
import styles from './Modal.module.css';

const Modal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            <button onClick={handleModalOpen}>
                {isModalOpen ? 'Close Modal' : 'Open Modal'}
            </button>

            {isModalOpen && (
                <div className={styles.modal}>
                    <div className={styles.modal_content}>
                        <h2>Modal Title</h2>
                        <p>This is the modal content.</p>
                    </div>
                </div>
            )}
        </>
    )
}

export default Modal