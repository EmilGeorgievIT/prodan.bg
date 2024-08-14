export default function Modal({ title, description, submitButtonLabel, removePost }) {
    return (
        <div className="modal fade" id="removeModal" tabIndex="-1" role="dialog" aria-labelledby="removeModal" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="removeModal">{title}</h5>

                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div className="modal-body">
                        <p>
                            {description}
                        </p>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-sm btn-secondary" data-dismiss="modal">Cancel</button>

                        <button type="button" onClick={removePost} className="btn btn-sm btn-primary">{submitButtonLabel}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}