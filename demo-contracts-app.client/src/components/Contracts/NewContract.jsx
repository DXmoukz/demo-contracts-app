import { useState } from 'react';
import PropTypes from 'prop-types';
import "./NewContract.css"


const NewContract = ({ addContract }) => {
    const [newContract, setNewContract] = useState({
        authorName: '',
        legalEntityName: '',
        description: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewContract({ ...newContract, [name]: value });
    };

    const handleSubmit = () => {
        addContract(newContract);
        // Optionally, you can clear the form fields after submission
        setNewContract({
            authorName: '',
            legalEntityName: '',
            description: ''
        });
    };

    return (
        <div>
            <h2>Add New Contract</h2>
            <input
                type="text"
                name="authorName"
                placeholder="Author Name"
                value={newContract.authorName}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="legalEntityName"
                placeholder="Legal Entity Name"
                value={newContract.legalEntityName}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="description"
                placeholder="Description"
                value={newContract.description}
                onChange={handleInputChange}
            />
            <button onClick={handleSubmit}>Add Contract</button>
        </div>
    );
};

NewContract.propTypes = {
    addContract: PropTypes.func.isRequired,
};

export default NewContract;
