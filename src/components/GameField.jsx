import Cell from "./Cell";
import {useEffect, useState} from "react";

export default function GameField() {

    let timer;
    const [visibility, SetVisibility] = useState(getEmptyArray());

    function getEmptyArray(){
        return Array(4).fill(false);
    }

    function setButtonsVisibility(){
        const bShow = Math.floor(Math.random() * 3);
        const newArr = getEmptyArray();
        newArr[bShow] = true;
        console.log("bShow=" + bShow);
        console.log("newArr=" + newArr);
        SetVisibility(newArr);
    }

    useEffect(() => {
        timer = window.setInterval(setButtonsVisibility, 1000);
    }, []);

    return (
        <table>
            <tbody>
                <tr>
                    <td id="cell_1_1">
                        <Cell isVisible={visibility[0]} />
                    </td>
                    <td id="cell_1_2">
                        <Cell isVisible={visibility[1]} />
                    </td>
                </tr>
                <tr>
                    <td id="cell_2_1">
                        <Cell isVisible={visibility[2]} />
                    </td>
                    <td id="cell_2_2">
                        <Cell isVisible={visibility[3]} />
                    </td>
                </tr>
            </tbody>
        </table>
    );

}