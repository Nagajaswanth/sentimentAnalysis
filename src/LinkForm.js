import React, { useState } from 'react';

function LinkForm() {
    const [link, setLink] = useState('');

    const takeLink = () => {
        console.log(link)
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ textAlign: 'center' }}>
                <input 
                    type="text" 
                    placeholder="Enter your link here" 
                    value={link} 
                    onChange={(e) => setLink(e.target.value)} 
                    style={{ width: '300px', padding: '10px', marginBottom: '20px' }} 
                />
                <br />
                <button onClick={takeLink} style={{ padding: '10px 20px', border: 'none', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }}>
                    Take Link
                </button>
            </div>
        </div>
    );
}

export default LinkForm;
