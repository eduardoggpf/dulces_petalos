import React, { useEffect, useState } from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { useParams } from 'react-router-dom';
import '../ui/headerComponent.css';

function HeaderComponent() {
    const [data, setData] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        fetch('https://dulces-petalos.herokuapp.com/api/product/' + id)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error(error));
    }, []);

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
                        <text class="breadcrumbTextSecondary">{(data?.name? data.name : "")}</text>
                    </Breadcrumbs>
                </div>
            </tr>
        </table>
        </div>
    );
}

export default HeaderComponent;