"use client";

import React, { useState } from 'react';

const IconUploader = () => {
    const [icons, setIcons] = useState([]);

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        const newIcons = files.map(file => {
            const reader = new FileReader();
            return new Promise(resolve => {
                reader.onloadend = () => {
                    resolve(reader.result);
                };
                reader.readAsDataURL(file);
            });
        });

        Promise.all(newIcons).then(results => {
            setIcons(prevIcons => [...prevIcons, ...results]);
        });
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <input type="file" accept="image/*" multiple onChange={handleFileChange} />
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px' }}>
                {icons.map((icon, index) => (
                    <div key={index} style={{ margin: '10px' }}>
                        <img src={icon} alt={`Uploaded Icon ${index + 1}`} width="24" height="24" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IconUploader;
