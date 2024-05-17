import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import "./EditContract.css";

const EditContract = ({ contract, editContract }) => {
    const [updatedContract, setUpdatedContract] = useState({
        id: contract.id,
        authorName: contract.authorName,
        legalEntityName: contract.legalEntityName,
        description: contract.description,
    });

    useEffect(() => {
        setUpdatedContract({
            id: contract.id,
            authorName: contract.authorName,
            legalEntityName: contract.legalEntityName,
            description: contract.description,
        });
    }, [contract]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedContract({ ...updatedContract, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        editContract(updatedContract);
    };

    return (
        <div>
            <h2>Edit Contract</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="authorName"
                    placeholder="Author Name"
                    value={updatedContract.authorName}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="legalEntityName"
                    placeholder="Legal Entity Name"
                    value={updatedContract.legalEntityName}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={updatedContract.description}
                    onChange={handleInputChange}
                />
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
};

EditContract.propTypes = {
    contract: PropTypes.object.isRequired,
    editContract: PropTypes.func.isRequired,
};

export default EditContract;
