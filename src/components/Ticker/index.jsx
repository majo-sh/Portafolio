import Marquee from "react-fast-marquee";
import './Ticker.css'
export default function Ticker({message}) {
    return (
    <div className="tick-container">
        <Marquee className="text-ticker" gradient={false} speed={40}>
            {message}
        </Marquee>
    </div>
    )
}