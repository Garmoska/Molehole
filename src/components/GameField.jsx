import Cell from "./Cell";
import {useEffect, useState} from "react";
import Score from "./Score";

export default function GameField() {

    let timer;
    const [visibility, SetVisibility] = useState(getEmptyArray());
    const [score, SetScore] = useState(0);

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

    // launched on each click on button
    function increasePoints(){
        SetScore(score + 1);
    }

    return (
        <table>
            <tbody>
                <tr>
                    <Score value={score} />
                </tr>
                <tr>
                    <td id="cell_1_1">
                        <Cell isVisible={visibility[0]} increaseScore={increasePoints} />
                    </td>
                    <td id="cell_1_2">
                        <Cell isVisible={visibility[1]} increaseScore={increasePoints} />
                    </td>
                </tr>
                <tr>
                    <td id="cell_2_1">
                        <Cell isVisible={visibility[2]} increaseScore={increasePoints} />
                    </td>
                    <td id="cell_2_2">
                        <Cell isVisible={visibility[3]} increaseScore={increasePoints} />
                    </td>
                </tr>
            </tbody>
        </table>
    );

}