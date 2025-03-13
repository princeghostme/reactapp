import React from 'react';

interface modelProps {
    show: boolean;
    handleClose: () => void
}

const BmiCalcualtor: React.FC<modelProps> = ({ show, handleClose }) => {
    console.log(show,handleClose);
    return (
        <>
            <div
                className="modal fade"
                id="modalId"
                // tabindex={-1}
                role="dialog"
                aria-labelledby="modalTitleId"
                aria-hidden="true"
            >
                <div
                    className="modal-dialog modal-sm modal-fullscreen"
                    role="document"
                >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalTitleId">
                                Modal title
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">Body</div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default BmiCalcualtor