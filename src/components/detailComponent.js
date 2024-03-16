import React from 'react';
import '../ui/detailComponent.css';
import { Button } from '@material-ui/core';

const DetailComponent = (flower) => {
    const data = flower.flower;

    if(data != null && data !== undefined && Object.values(data).length !== 0){
        return (
            <table class="detailTable">
                <tr>
                    <Button class = "backButton" onClick={() => window.location.href = "/"}>Back</Button>
                </tr>
                <tr>
                    <td>
                    <img class="detailImg" src={data.imgUrl} alt='Flower Image'/>
                    </td>
                    <td>
                        <h2>{data.name}</h2>
                        <p>{data.binomialName}</p>
                        <p>Precio: {data.price} $</p>
                        <p>Riegos semanales: {data.wateringsPerWeek}</p>
                        <p>Tipos de fertilizante: {(data?.fertilizerType?.toLowerCase().includes("phos")) ? "Fosforado" : (data?.fertilizerType?.toLowerCase().includes("nitro")) ? "Nitrogenado" : "No especificado"}</p>
                        <p>Altura en cm: {data.heightInCm}</p>
                    </td>
                </tr>
            </table>
        );
    }else{
        return (
            <div>
                <h2>Producto no encontrado</h2>
            </div>
        );
    }
};

export default DetailComponent;