import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons"; // Import corretto

export default function Stars({ vote }) {

    let list = []
    for (let i = 0; list.length < vote; i++) {
        list.push(i)
    }

    return (
        <>
            {list.map(star => <FontAwesomeIcon icon={faStar} />)}
        </>
    )
}