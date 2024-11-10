export default function ResultModal({result, targetTime}) {
    return (
        <>
        <dialog className="result-modal" open>
        <h2>You {result }</h2>
        <p>The target time was <strong>{targetTime}</strong></p>
        <form action="" method="dialog">
        
        <button>Close</button>
        </form>
        
        </dialog>

        </>
    )
};