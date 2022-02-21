import './Terminal.css'

export default function Terminal() {
    return (
        <article className="terminal">
            <div className="containerText">
                <span className="userTerminal">User@CYBERPC</span>
                <span className="userTerminalDec">:~$ </span>
                <span className="textAnimation"> npx create-react-app</span>
            </div>
        </article>
    )
}