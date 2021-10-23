import React, { useEffect, useState } from "react";
import { Message, Transition } from "semantic-ui-react";

import './Popup.css';

export const Popup = ({ message, onPopupComplete }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (message) {
            setVisible(true);

            const visibilityTimeout = setTimeout(() => {
                setVisible(false);

                const completeTimeout = setTimeout(() => {
                    onPopupComplete();

                    clearTimeout(completeTimeout);
                    clearTimeout(visibilityTimeout);
                }, 600);
            }, 3000);
        }
    }, [message, onPopupComplete]);

    return (
        <>
            <Transition visible={visible} animation='fade' duration={500}>
                <Message className="popup-message">
                    <p>{message}</p>
                </Message>
            </Transition>
        </>
    )
}