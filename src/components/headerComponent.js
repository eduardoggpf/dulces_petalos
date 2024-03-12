import React from 'react';
import '../ui/headerComponent.css';

function HeaderComponent() {
    const handleHeaderClick = () => {
        return window.location.href = "/";
    };

    return (
        <div class="App-header">
        <h1 onClick={handleHeaderClick}>Dulces pétalos</h1>
        </div>
    );
}

export default HeaderComponent;