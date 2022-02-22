import './description.css'


export default function Description () {
    return (
    <article className="container-description">
        <div className="text-description">
            <h3 className="title-tick">TickCopy</h3>
            <p>Proyecto realizado para aplicar react y consumir una pequeña api hecha en Supabase</p>
            <h3 className="title-tick">Realizado con</h3>
            <p>React y Supabase</p>
            <h3 className="title-tick">Repositorio</h3>
            <span className="butto">
            <a href="https://github.com/majo-sh/clon-ticktock" target="_blank" rel="noreferrer">Github</a>
            </span>
            <h3 className="title-tick">Link</h3>
            <span className="butto">
            <a href="https://clon-ticktock.vercel.app/" target="_blank" rel="noreferrer">CopyTock</a>
            </span>
        </div>
    </article>
    )
}