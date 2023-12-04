export default function Card(props) {
    return (
        <div className={`w-full rounded-lg w-96 ${props.cardGradient} from-accent shawod-xl`}>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    )
}