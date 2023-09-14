import React, { useState } from 'react';

export default function TabSwitch() {
    const [activeTab, setActiveTab] = useState('tab-1');

    const tabItems = [
        { id: 'tab-1', text: 'For Patients', content: <p>abcd1</p> },
        { id: 'tab-2', text: 'For Doctors', content: <p>abcd2</p> },
    ];

    const selectItem = (id) => {
        setActiveTab(id);
    };

    return (
        <div>
            <section className="tabs">
                <div className="container">
                    {tabItems.map((item) => (
                        <div
                            key={item.id}
                            id={item.id}
                            className={`bg-black text-white tab-item ${activeTab === item.id ? 'tab-border' : ''}`}
                            onClick={() => selectItem(item.id)}
                        >
                            <p className="hide-sm">{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="tab-content">
                <div className="container">
                    {tabItems.map((item) => (
                        <div
                            key={`${item.id}-content`}
                            id={`${item.id}-content`}
                            className={`tab-content-item ${activeTab === item.id ? 'show' : ''}`}
                        >
                            {item.content}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
