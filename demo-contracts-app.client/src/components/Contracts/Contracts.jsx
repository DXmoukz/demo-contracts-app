import { useEffect, useState } from 'react';
import "./Contracts.css"
import NewContract from './NewContract';
import EditContract from './EditContract';

const Contracts = () => {
    const [contracts, setContracts] = useState([]);
    const [showNewContract, setShowNewContract] = useState(false);
    const [showEditContract, setShowEditContract] = useState(false);
    const [currentContract, setCurrentContract] = useState(null);

    useEffect(() => {
        fetchContracts();
    }, []);


    const fetchContracts = async () => {
        try {
            const response = await fetch('https://localhost:7158/api/contracts');
            if (!response.ok) {
                throw new Error('Failed to fetch contracts');
            }
            const data = await response.json();
            setContracts(data);
        } catch (error) {
            console.error('Error fetching contracts:', error);
        }
    };

    const addContract = async (newContract) => {
        try {
            const response = await fetch('https://localhost:7158/api/contracts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newContract)
            });
            if (!response.ok) {
                throw new Error('Failed to add contract');
            }
            fetchContracts();
            setShowNewContract(false); // Close the form after adding the contract
        } catch (error) {
            console.error('Error adding contract:', error);
        }
    };

    const deleteContract = async (id) => {
        try {
            const response = await fetch(`https://localhost:7158/api/contracts/${id}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error('Failed to delete contract');
            }
            fetchContracts();
        } catch (error) {
            console.error('Error deleting contract:', error);
        }
    };

    const editContract = async (updatedContract) => {
        try {
            const response = await fetch(`https://localhost:7158/api/contracts/${updatedContract.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedContract)
            });
            if (!response.ok) {
                throw new Error('Failed to edit contract');
            }
            fetchContracts();
            setShowEditContract(false);
        } catch (error) {
            console.error('Error editing contract:', error);
        }
    };

    const handleEditClick = (contract) => {
        setCurrentContract(contract);
        setShowEditContract(true);
    };

    return (
        <div className="container">
            <div className="centering">
                <h1>Legal Contracts</h1>
                <button onClick={() => setShowNewContract(true)}>Add New Contract</button>
                {showNewContract && (
                    <>
                        <div className="modal-overlay" onClick={() => setShowNewContract(false)} />
                        <div className="modal">
                            <NewContract addContract={addContract} />
                        </div>
                    </>
                )}
                {showEditContract && currentContract && (
                    <>
                        <div className="modal-overlay" onClick={() => setShowEditContract(false)} />
                        <div className="modal">
                            <EditContract contract={currentContract} editContract={editContract} />
                        </div>
                    </>
                )}
            </div>
            <div className="container">
            <ul className="responsive-table">
                <li className="table-header">

                    <div className="col col-2">Customer Name</div>
                    <div className="col col-3">Amount Due</div>
                    <div className="col col-4">Payment Status</div>
                </li>
                {contracts.map(contract => (
                    <li className="table-row" key={contract.id}>
                        <span>{contract.authorName}</span>
                        <span>{contract.legalEntityName}</span>
                        <span>{contract.description}</span>
                        <button onClick={() => handleEditClick(contract)}>
                            <i className="fas fa-pen"></i>
                        </button>
                        <button onClick={() => deleteContract(contract.id)}>Delete</button>
                    </li>
                ))}
                </ul>

            </div>
            
        </div>
    );
};

export default Contracts;
