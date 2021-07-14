import React from 'react';
import './styles.scss';

type Props = {

    children: React.ReactNode;
}

const BaseForm = ( { children } : Props) => {

    return (

        <div className="review-base-form card-base">

            {children}

            <div className="base-form-actions">

                <button className="button-salvar navbar-buttons-icons-color border-radius-10">
                    SALVAR AVALIAÇÃO
                </button>

            </div>

        </div>

    );

}

export default BaseForm;