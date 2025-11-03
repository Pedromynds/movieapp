import React from "react";
import { useSelector } from "react-redux";
import CardMovie from "../../components/cardmovie/CardMovie";


function Favoritos(){
    const favorites = useSelector((state) => state.favorites);

    return (
        <div>
            <h2>Meus Favoritos</h2>
            {favorites.length === 0 ? (
                <p>Nenhum filme favorite ainda</p>
            ): (
                <CardMovie movies={favorites} />
            )} 
        </div>
    );
};

export default Favoritos;