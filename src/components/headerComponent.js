import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import '../ui/headerComponent.css';

function HeaderComponent(name) {

    const handleHeaderClick = () => {
        return window.location.href = "/";
    };

    return (
        <div class="App-header">
        <table>
            <tr>
                <h1 onClick={handleHeaderClick}>Dulces pétalos</h1>
            </tr>
            <tr>
                <div class="breadCrumb">
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" href="/">
                            <text class="breadcrumbText"> Home</text>
                        </Link>
                        <text class="breadcrumbTextSecondary">{(name?.flower? name.flower : "")}</text>
                    </Breadcrumbs>
                </div>
            </tr>
        </table>
        </div>
    );
}

export default HeaderComponent;