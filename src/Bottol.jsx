import { useState } from "react";
import Bottolclick from "./Bottolclick";
import { useEffect } from "react";
import './bottol.css'
import { addTols, getStorCard } from "./localstor/localstor";

const Bottol = () => {
    const [bottol, setbottol] = useState([])
    useEffect(() => {
        fetch("bottol.json")
            .then(res => res.json())
            .then(data => setbottol(data));
    }, [])
    useEffect(() => {
        console.log(bottol.length)
        if (bottol.length > 0) {
            const storcard = getStorCard()
            const machingbottols = [];
            console.log(machingbottols)
            for (const id of storcard) {
                // console.log(id)
                const bottols = bottol.find(bottole => bottole.id === id);
                if(bottols){
                    console.log(bottols)
                    machingbottols.push(bottols)
                }
            }
            setbybottol(machingbottols)
        }
    }, [bottol])
    const [bybottol, setbybottol] = useState([])
    const handalclick = click => {
        // console.log(click)
        const newbottols = [...bybottol, click]
        setbybottol(newbottols)
        addTols(click.id)
    }


    return (
        <>
            <p>all bottols: {bottol.length}</p>
            <p>By bottols:{bybottol.length}</p>
            <h4>Total Price:{bybottol.map(pri => pri.price)} </h4>
            <div className="gridSet">
                {
                    bottol.map(bottolpic => <Bottolclick key={bottolpic.id}
                        bottolclick={bottolpic}
                        handalclick={handalclick}
                    ></Bottolclick>)
                }

            </div>
        </>
    );
};

export default Bottol;