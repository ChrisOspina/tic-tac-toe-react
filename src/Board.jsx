import  {useState, useEffect, useRef} from "react"

const board = ({reset, setReset, winner, setWinner}) =>{

    //Turn state which indicates the current turn
    const [turn, setTurn] = useState(0);

    //Data state which contains the picture of the board
    const [data,setData] = useState([
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
    ]);

    //A reference for the board
    const boardRef = useRef(null);

    //Function to draw on the board
    const draw = (event, index)=>{
        //Draw if poistion is not taken
    if(data[index-1]==="" && winner ===""){

    }
    };
}